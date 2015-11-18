﻿using System.Web;
using System.Web.Optimization;

namespace AngularJS_Guide
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/angularjs").Include(
                        "~/Scripts/angular.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularjs/core").Include(
                        "~/Scripts/AngularJS/angularjsguideapp.module.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularjs/directives").Include(
                        "~/Scripts/AngularJS/Directives/*.directive.js",
                        "~/Scripts/angular-ui-router.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularjs/routes").Include(
                        "~/Scripts/AngularJS/Routes/*.routes.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularjs/controllers").Include(
                        "~/Scripts/AngularJS/Controllers/*.controller.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/jquery-ui").Include(
                        "~/Scripts/jquery-ui*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/jqueryupload").Include(
                      "~/Content/jquery.fileupload*"));
        }
    }
}
