/*!
* Copyright 2010 - 2013 Pentaho Corporation.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

dojo.provide("pentaho.common.CheckedMenuItem");

dojo.declare("pentaho.common.CheckedMenuItem",
    dijit.CheckedMenuItem,
    {

		templateString: dojo.cache("pentaho.common", "CheckedMenuItem.html"),

		_setCheckedAttr: function(/*Boolean*/ checked){
			// summary:
			//		Hook so attr('checked', bool) works.
			//		Sets the class and state for the check box.
            dojo.toggleClass(this.iconNode, "menuitem-checked", checked); 
			dijit.setWaiState(this.domNode, "checked", checked);
			this._set("checked", checked);
		},

		_setSelected: function(selected){
            if(!this.disabled) { 
                dojo.toggleClass(this.domNode, "pentaho-menuitem-hover", selected);
            }
        }

    }
);
