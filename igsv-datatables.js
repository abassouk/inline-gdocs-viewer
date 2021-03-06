// DataTables
jQuery(document).ready(function () {
    if (igsv_plugin_vars.datatables_defaults_object) {
        jQuery.extend(jQuery.fn.dataTable.defaults, igsv_plugin_vars.datatables_defaults_object);
    }
    jQuery(igsv_plugin_vars.datatables_classes).each(function () {
        var table = jQuery(this);
        var dt_opts = {
            'tableTools': {
                'sSwfPath': '//datatables.net/release-datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf'
            }
        };
        if (false === table.hasClass('no-responsive')) {
            dt_opts.responsive = true;
        }
        if (table.attr('lang')) {
            dt_opts.language = {
                'url': igsv_plugin_vars.lang_dir + '/datatables-' + table.attr('lang') + '.json'
            }
        }
        table.DataTable(dt_opts);

        var x;
        if (table.is('.FixedColumns')) {
            new jQuery.fn.dataTable.FixedColumns(table);
        } else if (x = this.className.match(/FixedColumns-(left|right)-([0-9])*/g)) {
            var l_n = 0;
            var r_n = 0;
            for (var i = 0; i < x.length; i++) {
                var z = x[i].split('-');
                if ('left' === z[1]) {
                    l_n = z[2];
                } else {
                    r_n = z[2];
                }
            }
            new jQuery.fn.dataTable.FixedColumns(table, {
                'leftColumns': l_n,
                'rightColumns': r_n
            });
        }
    });
});
