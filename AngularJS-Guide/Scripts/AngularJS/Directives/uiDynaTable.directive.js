﻿(function (angular) {
    'use strict';

    function TableHeader(name, isHidden) {
        var self = this;

        self.name = name;
        self.isHidden = isHidden;
    }

    function uiDynaTable() {
        function link(scope, element, attrs) {
            // Generate Table Headers
            scope.tableHeaders = [];
            scope.setTableHeaders = function (obj) {
                for (var key in obj) {
                    scope.tableHeaders.push(new TableHeader(key, false));
                }
            };

            // Pagination
            scope.currentPage = 1;
            scope.totalPage = 0;

            scope.hasPreviousPage = false;
            scope.previousPage = function () {
                if (scope.currentPage != 1) {
                    scope.currentPage = scope.currentPage - 1;
                }
            };

            scope.hasNextPage = false;
            scope.nextPage = function () {
                if (scope.currentPage != scope.totalPage) {
                    scope.currentPage = scope.currentPage + 1;
                }
            };

            scope.pagePagination = 5;
            scope.setPages = function () {
                scope.pages = [];

                var pageWindow = (scope.pagePagination - 1) / 2;

                var start = scope.currentPage - pageWindow;
                var end = scope.currentPage + pageWindow;

                if (end < scope.pagePagination) {
                    end = scope.pagePagination;
                }

                if (end > scope.totalPage) {
                    end = scope.totalPage;
                    start = scope.totalPage - scope.pagePagination + 1;
                }

                if (start < 1) {
                    start = 1;
                }

                var totalPagePagination = end - start + 1;

                for (var i = 0; i < totalPagePagination; i++) {
                    scope.pages.push(start++);
                }
            };

            scope.$watch('currentPage', function (newValue, oldValue) {
                scope.hasPreviousPage = scope.currentPage != 1;
                scope.hasNextPage = scope.currentPage != scope.totalPage;
                scope.setPages();
                scope.filterData();
            });

            scope.changePage = function (data) {
                scope.currentPage = data;
            };

            // Table Data
            scope.filteredData = [];

            scope.$watchCollection('data', function (newCol, oldCol, scope) {
                if (!scope.pagination || scope.pagination.toLowerCase() !== 'server') {
                    scope.totalRecords = newCol.length;
                }

                if (!scope.rowPerPage) {
                    scope.rowPerPage = scope.totalRecords;
                }

                if (scope.totalRecords > scope.rowPerPage) {
                    scope.totalPage = Math.ceil(scope.totalRecords / scope.rowPerPage);
                    scope.setPages();
                } else {
                    scope.totalPage = 0;
                }

                scope.setTableHeaders(newCol[0]); 

                scope.filterData();
            });

            scope.filterData = function () {
                var startRow = (scope.currentPage - 1) * scope.rowPerPage;
                var endRow = startRow + scope.rowPerPage;

                scope.filteredData = scope.data.slice(startRow, endRow);
            };
        }

        var directive = {
            link: link,
            templateUrl: '/Templates/Directive/UiDynaTable.html',
            restrict: 'EA',
            scope: {
                data: '=',
                rowPerPage: '=',
                totalRecords: '=',
                pagination: '='
            }
        };

        return directive;
    }

    angular
        .module('ui.dyna.table', [])
        .directive('uiDynaTable', uiDynaTable);
})(angular);