/**
 * @typedef {{id: number, author?: string, work?: string, concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */

import { Navbar } from "./navigationbar.js"
import { TableView } from "./table.js";
import { FormController } from "./form.js";
import { AuthorManager } from "./manager.js";
import { ImportExport } from "./importexport.js";

const formFields = [{
    id: 'author',
    label: 'Név',
    name: 'author'
},
{
    id: 'work',
    label: 'Mű',
    name: 'work'
},
{
    id: 'concept',
    label: 'Fogalom',
    name: 'concept'
}]

const headerArray = ['Szerző', 'Mű', 'Fogalom']

const manager = new AuthorManager();

const navbar = new Navbar();
navbar.appendTo(document.body);
const table = new TableView('table', headerArray, manager);
table.appendTo(document.body);
const form = new FormController('tableForm',formFields,manager);
form.appendTo(document.body);
const importExport = new ImportExport("importexport",manager)
importExport.appendTo(document.body)
navbar.addViewElement('Table', table);
navbar.addViewElement('Form', form);

navbar.addViewElement("Import/export", importExport)
navbar.activate('table');