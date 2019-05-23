
/* JavaScript content from app/view/install/installplan/InstallPlanConditionSynchronization.js in folder common */
/*
 * File: app/view/InstallatoinTasksSynchronousPanel.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

/**
 * 安装计划之条件同步
 * 2014-4-29  xcx
 */

Ext.define('HelcPDA.view.install.installplan.InstallPlanConditionSynchronization', {
    extend: 'Ext.Panel',
    id:'InstallPlanConditionSynchronization_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Spacer'
    ],

    config: {
        margin: '0 auto',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '按条件同步',
                items: [
                    {
                        xtype: 'button',
                       id:'InstallPlanConditionSynchronization_id_FH_Button',
                        text: '返回',
                    }
                ]
            },
            {
                xtype: 'formpanel',
                flex: 1,
                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        margin: '0 auto',
                        items: [
                            {
                                xtype: 'textfield',
                                id:'ENGCONTRACT_NUMBER',
                                label: '安装合同号',
                                labelWidth: '40%',
                                placeHolder: '请输入安装合同号'
                            },
                            {
                                xtype: 'textfield',
                                label: '工号',
                                id:'ELEVATOR_NO',
                                labelWidth: '40%',
                                placeHolder: '请输入工号'
                            },
                            {
                                xtype: 'textfield',
                                label:'客户',
                                id:'CUSTOMER_NAME',
                                labelWidth: '40%',
                                placeHolder: '请输入客户'
                            },
                            {
                                xtype: 'panel',
                                layout: {
                                    type: 'hbox',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'spacer'
                                    },
                                    {
                                        xtype: 'button',
                                        handler: function(button, e) {

                                        },
                                        margin: '15 0',
                                        width: '90%',
                                        id:'instalPlanTBButtton',
                                        text: '同步'
                                    },
                                    {
                                        xtype: 'spacer'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

});