
/* JavaScript content from app/view/RegularInspection/Overlay_RI_SearchPerson.js in folder common */
/*
 * File: app/view/RegularInspection/RI_SearchElevatorNo.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcPDA.view.RegularInspection.Overlay_RI_SearchPerson', {
    extend: 'Ext.Container',

    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.SegmentedButton'
    ],

    config: {
        centered: true,
        height: '80%',
        id: 'Overlay_RI_SearchPerson',
        width: '90%',
        hideOnMaskTap: true,
        layout: 'vbox',
        modal: true,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: '查找人员'
            },
            {
                xtype: 'formpanel',
                height: 85,
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 't_Overlay_RI_SearchPerson_Person',
                                labelWidth: 105,
                                placeHolder: '请输入关键字(例如：张 或 张三)'
                            },
                            {
                                xtype: 'button',
                                id: 'btn_Overlay_RI_SearchPerson_search',
                                margin: '5 20 5 20',
                                text: '查找'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'list',
                        id: 'L_Overlay_RI_SearchPerson',
                        cls: 'helcpda_selected',
                        flex: 1,
                        allowDeselect: true,
                        itemTpl: [
                            '<div>{FullName} {EmployeeNum}/{StationName}</div>'
                        ],
                        store: 'ST_Overlay_RI_SearchPerson',
                        onItemDisclosure: true
                    }
                ]
            },
            {
                xtype: 'segmentedbutton',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        id: 'btn_Overlay_RI_SearchPerson_cancel',
                        flex: 1,
                        text: '取消'
                    },
                    {
                        xtype: 'button',
                        id: 'btn_Overlay_RI_SearchPerson_selected',
                        flex: 1,
                        text: '确定'
                    }
                ]
            }
        ]
    }

});