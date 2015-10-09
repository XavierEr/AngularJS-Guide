(function (angular) {
    'use strict';

    function uiDynaTable() {
        function TableHeader(name, isHidden) {
            var self = this;

            self.name = name;
            self.isHidden = isHidden;
        }

        function link(scope, element, attrs) {
            // Generate Table Headers
            scope.tableHeaders = [];
            scope.setTableHeaders = function (obj) {
                for (var key in obj) {
                    scope.tableHeaders.push(new TableHeader(key, false));
                }
            };
            scope.setTableHeaders(scope.data[0]);

            // Pagination
            scope.currentPage = 1;
            scope.totalRecords = scope.data.length;
            scope.totalPage = 0;
            scope.$watch('rowPerPage', function (newValue, oldValue) {
                if (scope.rowPerPage) {
                    if (scope.totalRecords > scope.rowPerPage) {
                        scope.totalPage = Math.ceil(scope.totalRecords / scope.rowPerPage);
                    } else {
                        scope.totalPage = 0;
                    }
                } else {
                    scope.rowPerPage = scope.data.length;
                }
            });

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
            scope.pages = [];
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
            });

            scope.changePage = function (data) {
                scope.currentPage = data;
            };

            // Table Data
            scope.filteredData = [];
            scope.$watchGroup(['currentPage'], function (newValues, oldValues, scope) {
                var startRow = (scope.currentPage - 1) * scope.rowPerPage;
                var endRow = startRow + scope.rowPerPage;

                scope.filteredData = scope.data.slice(startRow, endRow);
            });
        }

        var directive = {
            link: link,
            templateUrl: '/Templates/Directive/UiDynaTable.html',
            restrict: 'EA',
            scope: {
                data: '=',
                rowPerPage: '=',
                pagination: '@'
            }
        };

        return directive;
    }

    angular
        .module('ui.dyna.table', [])
        .directive('uiDynaTable', uiDynaTable);
})(angular);