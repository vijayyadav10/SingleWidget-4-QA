(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{792:function(e,t,n){},810:function(e,t,n){},811:function(e,t,n){"use strict";n.r(t);n(353),n(354);var a=n(29),o=n(30),r=n(31),s=n(32),c=n(352),i=n(1),l=n.n(i),u=n(23),d=n.n(u),p=n(90),h=n(28),b=n(24),m=n(74),g=n(15),f=n.n(g),j=n(10),O=n(50),x=n(59),y=n.n(x),C=[5,10,15,25,50],w="Select Collection Type",v="Name",S={SELECT:"Select",NAME:v,CREATEDBY:"Created by",LASTEDITED:"Last edited",CREATEDEDITED:"Created date"},T="EntKcToken",k="YYYY-MM-DD HH:mm:ss",N=[".JPEG",".JPG",".PNG",".GIF",".SVG",".TIFF",".ICO",".DVU"],P="url",I=["createdAt","updatedAt","publishedAt","createdBy","updatedBy","id","localizations","locale"],R="13px",B="".concat("http://172.40.0.142:1337"),F="".concat("http://172.40.0.142:8081/api","/template/"),M="".concat(B,"/content-manager/collection-types/api::"),A="".concat(B,"/i18n/locales"),D="&sort=createdAt:DESC",E={Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzNTczMDY3LCJleHAiOjE2NTYxNjUwNjd9.FiN2x2wdAnnukijuQmoP3xzLxPyjy3FFMSGpwi-iJKE")},L=function(){var e=Object(b.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat(B,"/content-manager/content-types"),V({},T));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,a,o,r,s,c=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,a=c.length>2&&void 0!==c[2]?c[2]:5,o="".concat(M).concat(t,".").concat(t,"?page=").concat(n,"&pageSize=").concat(a).concat(D),e.next=5,y.a.get(o,V({},T));case 5:return r=e.sent,s=r.data,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(b.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(A),e.next=3,y.a.get(t,V({},T));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(b.a)(f.a.mark((function e(t,n){var a,o,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(M).concat(t,".").concat(t,"/").concat(n),e.next=3,y.a.get(a,V({},T));case 3:return o=e.sent,r=o.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(b.a)(f.a.mark((function e(t,n,a){var o,r,s,c,i,l=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=l.length>3&&void 0!==l[3]?l[3]:1,r=l.length>4&&void 0!==l[4]?l[4]:5,t){e.next=4;break}throw new Error("collectionType is missing");case 4:return s="".concat(M).concat(t,".").concat(t,"?filters[").concat(a,"][$containsi]=").concat(n,"&page=").concat(o,"&pageSize=").concat(r),e.next=7,y.a.get(s,V({},T));case 7:return c=e.sent,i=c.data,e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),K=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat(F));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){var t=window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:localStorage.getItem("token");return console.log("ET-Widget-Config",t),t?{headers:{Authorization:"".concat(e," ").concat(t)}}:e===T?{headers:E}:{}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Bearer",n=G(t);return Object(O.a)(Object(O.a)({},e),n)},J=n(147),Y=n(3),Q=n.n(Y),X=n(342),Z=n(343),$=n(68),q=n(344),ee=n(6),te=[],ne=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;Object(a.a)(this,n),(o=t.call(this,e)).totalPages=function(){var e=o.state.pagination.perPage;return Math.ceil(te.length/e)},o.onPageInput=function(e){o.setState({pageChangeValue:e.target.value})},o.onSubmit=function(){o.setPage(o.state.pageChangeValue)},o.setPage=function(e){var t=Number(e);if(!Number.isNaN(e)&&""!==e&&t>0&&t<=o.totalPages()){var n=Object.assign({},o.state.pagination);n.page=t,o.setState({pagination:n,pageChangeValue:t})}},o.onPerPageSelect=function(e,t){var n=Object.assign({},o.state.pagination);n.perPage=e,n.page=1,o.setState({pagination:n})},o.onFirstPage=function(){o.setPage(1)},o.onPreviousPage=function(){o.state.pagination.page>1&&o.setPage(o.state.pagination.page-1)},o.onNextPage=function(){o.state.pagination.page<o.totalPages()&&o.setPage(o.state.pagination.page+1)},o.onLastPage=function(){var e=o.state.pagination.page,t=o.totalPages();e<t&&o.setPage(t)},o.onSelectRow=function(e,t){var a,r,s=o.props.onRowsLogger,c=o.state,i=c.rows,l=c.selectedRows,u=i.findIndex((function(e){return e.id===t.id}));u>-1&&(t.selected?(a=l.filter((function(e){return!(e===t.id)})),r=n.deselectRow(t)):(l.push(t.id),a=l,r=n.selectRow(t)),i[u]=r,o.setState({rows:i,selectedRows:a}),s(i.filter((function(e){return e.selected}))))},o.onSelectAllRows=function(e){var t=o.props.onRowsLogger,a=o.state,r=a.rows,s=a.selectedRows,c=e.target.checked,i=o.currentRows().rows;if(c){var l=Object(J.a)(new Set([].concat(Object(J.a)(i.map((function(e){return e.id}))),Object(J.a)(s)))),u=r.map((function(e){return l.indexOf(e.id)>-1?n.selectRow(e):e}));o.setState({rows:u,selectedRows:l}),t(u.filter((function(e){return e.selected})))}else{var d=i.map((function(e){return e.id})),p=s.filter((function(e){return!(d.indexOf(e)>-1)})),h=r.map((function(e){return p.indexOf(e.id)>-1?e:n.deselectRow(e)}));o.setState({rows:h,selectedRows:p}),t(h.filter((function(e){return e.selected})))}},o.onRow=function(e,t){t.rowIndex;o.props.setSelectedContent([e],o.props.selectedCollectionType);var n=te.indexOf(e.id)>-1;return{className:Q()({selected:n}),role:"row"}};var r=function(){return o.state.sortingColumns||{}},s=$.sort({getSortingColumns:r,onSort:function(e){o.setState({sortingColumns:$.byColumn({sortingColumns:o.state.sortingColumns,sortingOrder:j.defaultSortingOrder,selectedColumn:e})})},strategy:$.strategies.byProperty}),c=$.header({sortableTransform:s,getSortingColumns:r,strategy:$.strategies.byProperty});return o.customHeaderFormatters=j.customHeaderFormattersDefinition,o.state={selectedContent:[],sortingColumns:{name:{direction:j.TABLE_SORT_DIRECTION.ASC,position:0}},columns:[{property:"select",displayName:"Select",header:{label:"select",props:{index:0,rowSpan:1,colSpan:1,id:"select"},transforms:[s],formatters:[c],customFormatters:[j.sortableHeaderCellFormatter]},cell:{props:{index:0},formatters:[function(e,t){var n=t.rowData,a=t.rowIndex;return Object(j.selectionCellFormatter)({rowData:n,rowIndex:a},o.onSelectRow,"vybrat ".concat(a),"vyberte \u0159\xe1dek ".concat(a))}]}},{property:"Title",displayName:"Names",header:{label:"Name",props:{index:1,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[j.sortableHeaderCellFormatter]},cell:{props:{index:1},formatters:[j.tableCellFormatter]}},{property:"createdBy",header:{label:"Created by",props:{index:2,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[j.sortableHeaderCellFormatter]},cell:{props:{index:2},formatters:[j.tableCellFormatter]}},{property:"updatedAt",header:{label:"Last edited",props:{index:3,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[j.sortableHeaderCellFormatter]},cell:{props:{index:3},formatters:[j.tableCellFormatter]}},{property:"Type",header:{label:"Type",props:{index:4,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[j.sortableHeaderCellFormatter]},cell:{props:{index:4},formatters:[j.tableCellFormatter]}},{property:"createdAt",header:{label:"Created date",props:{index:5,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[j.sortableHeaderCellFormatter]},cell:{props:{index:5},formatters:[j.tableCellFormatter]}},{property:"status",header:{label:"Status",props:{index:6,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[j.sortableHeaderCellFormatter]},cell:{props:{index:6},formatters:[j.tableCellFormatter]}}],rows:o.props.mockRows,selectedRows:[],pagination:{page:1,perPage:6,perPageOptions:[6,10,15]},pageChangeValue:1},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.mockRows&&this.setState({rows:this.props.mockRows})}},{key:"componentDidUpdate",value:function(e,t){this.props.mockRows!==e.mockRows&&this.setState({rows:this.props.mockRows})}},{key:"currentRows",value:function(){var e=this.state,t=e.rows,n=e.sortingColumns,a=e.columns,o=e.pagination;return Object(Z.a)(Object(j.paginate)(o),$.sorter({columns:a,sortingColumns:n,sort:X.orderBy,strategy:$.strategies.byProperty}))(t)}},{key:"render",value:function(){var e=this,t=this.state,n=t.columns,a=t.pagination,o=t.sortingColumns,r=t.pageChangeValue,s=this.currentRows();return Object(ee.jsxs)(j.Grid,{fluid:!0,children:[Object(ee.jsxs)(j.Table.PfProvider,{striped:!0,bordered:!0,hover:!0,dataTable:!0,columns:n,components:{header:{cell:function(t){return e.customHeaderFormatters({cellProps:t,columns:n,sortingColumns:o,rows:s.rows,onSelectAllRows:e.onSelectAllRows})}}},children:[Object(ee.jsx)(j.Table.Header,{headerRows:q.headerRows({columns:n})}),Object(ee.jsx)(j.Table.Body,{rows:s.rows,rowKey:"id",onRow:this.onRow})]}),Object(ee.jsx)(j.PaginationRow,{viewType:j.PAGINATION_VIEW.TABLE,pagination:a,pageInputValue:r,amountOfPages:s.amountOfPages,itemCount:s.itemCount,itemsStart:s.itemsStart,itemsEnd:s.itemsEnd,onPerPageSelect:this.onPerPageSelect,onFirstPage:this.onFirstPage,onPreviousPage:this.onPreviousPage,onPageInput:this.onPageInput,onNextPage:this.onNextPage,onLastPage:this.onLastPage,onSubmit:this.onSubmit})]})}}],[{key:"selectRow",value:function(e){return Object.assign({},e,{selected:!0})}},{key:"deselectRow",value:function(e){return Object.assign({},e,{selected:!1})}}]),n}(l.a.Component),ae=n(75),oe=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),o.props.runOnFilterData(o.state.values.name)},o.handleInputChange=function(e){o.setState({values:Object(ae.a)({},e.target.name,e.target.value)})},o.onClick=function(){o.setState({open:!o.state.open})},o.state={open:!1,values:{name:""}},o}return Object(o.a)(n,[{key:"handleKeyDown",value:function(){}},{key:"render",value:function(){return Object(ee.jsx)("div",{className:"ContentsFilter well",role:"button",tabIndex:0,style:{margin:"1rem 0rem"},children:Object(ee.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(ee.jsxs)("div",{style:{display:"flex",margin:"1rem 0rem"},children:[Object(ee.jsxs)("button",{id:"dropdown-example",role:"button","aria-haspopup":"true","aria-expanded":"false",type:"button",className:"dropdown-toggle btn btn-default",children:["Name ",Object(ee.jsx)("span",{className:"caret"})]}),Object(ee.jsx)("input",{type:"search",name:"name",value:this.state.values.name,onChange:this.handleInputChange,role:"combobox",className:"rbt-input-main form-control rbt-input",placeholder:"Search Content"})]}),Object(ee.jsx)("div",{className:"pull-right mbt10",style:{margin:"0 0 10px 0"},children:Object(ee.jsx)("button",{className:"btn btn-primary",children:"Search"})})]})})}}]),n}(l.a.Component),re=(n(792),i.Component,n(66)),se=n.n(re),ce=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).renderToggleButton=function(e){e.isMenuShown;var t=e.onClick;return Object(ee.jsx)("button",{type:"button",style:{position:"absolute",height:"100%",top:"0px",right:"0px",border:"1px solid lightgray"},onClick:function(e){e.preventDefault(),t(e)},children:Object(ee.jsx)("span",{className:"fa fa-angle-down"})})},o.onChangeTemplateId=function(e){o.props.setTemplateId(e.target.value)},o.state={templateType:[{label:"vj"}],selectedTemplateType:[]},o}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsxs)("table",{className:"table table-bordered table-datatable table-hover table-striped Contents__table-element",children:[Object(ee.jsx)("thead",{children:Object(ee.jsx)("tr",{children:Object.keys(ie).map((function(e,t){return Object(ee.jsx)("th",{children:ie[e]},t)}))})}),Object(ee.jsx)("tbody",{children:this.props.selectedContent.length>0&&this.props.selectedContent.map((function(t){return Object(ee.jsxs)("tr",{children:[Object(ee.jsx)("td",{children:t[Object.keys(t)[1]]}),Object(ee.jsx)("td",{children:"".concat(t.createdBy.firstname," ").concat(t.createdBy.lastname)}),Object(ee.jsx)("td",{children:se()(new Date(t.updatedAt)).format(k)}),Object(ee.jsx)("td",{children:se()(new Date(t.publishedAt)).format(k)}),Object(ee.jsx)("td",{children:Object(ee.jsxs)("select",{name:"modelId",className:"form-control",onChange:e.onChangeTemplateId,children:[Object(ee.jsx)("option",{value:"1",children:"Select Template"}),e.props.templateList.map((function(e){return Object(ee.jsx)("option",{value:e.id,children:e.templateName},e.id)}))]})})]},t.id)}))})]})})}}]),n}(l.a.Component),ie={Title:"Name",createdAt:"Created by",updatedAt:"Last edited",createDate:"Created date",selectDefaultTemplate:"Select default template *"},le="".concat("http://172.40.0.142:1337"),ue=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).onChangeTemplateId=function(e){o.setState({selectedTemplateId:e.target.value})},o.setSelectedContent=function(e,t){o.setState({selectedContent:e}),o.setState({name:e}),o.setState({nameTwo:encodeURIComponent(JSON.stringify(e))}),o.setState({selectedContentId:e[0].id})},o.handleTypeaheadChangeContentType=function(e){var t=e.map((function(e){return e.label}));o.setState({templateList:t})},o.componentDidMount=Object(b.a)(f.a.mark((function e(){var t,n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:return t=(t=e.sent).data.filter((function(e){return e&&e.uid&&e.uid.startsWith("api::")&&e.isDisplayed})),n=[],t.length&&t.forEach((function(e){n.push({label:e.info.pluralName})})),e.next=8,K();case 8:a=e.sent,r=a.data,o.setState({templateList:r,collectionTypes:r});case 11:case"end":return e.stop()}}),e)}))),o.handleAddNewContent=function(){var e="".concat(le,"/admin/content-manager"),t=window.open(e,"_blank");t&&t.focus()},o.state={selectedContent:[],name:null,nameTwo:null,collectionTypes:[],selectedContentId:0,selectedTemplateId:"default",templateList:[]},o.handleAddNewContent=o.handleAddNewContent.bind(Object(m.a)(o)),o}return Object(o.a)(n,[{key:"render",value:function(){return Object(ee.jsx)("form",{className:"form-horizontal SingleContentConfigForm well",children:Object(ee.jsx)(j.Row,{children:Object(ee.jsx)(j.Col,{xs:12,children:Object(ee.jsx)("div",{children:Object(ee.jsxs)("div",{children:[Object(ee.jsx)("span",{className:"icon fa fa-puzzle-piece",title:"Widget"}),Object(ee.jsx)("h5",{className:"SingleContentConfigFormBody__widgetTitle",children:"Content"}),Object(ee.jsx)("div",{className:"SectionTitle SectionTitle__non-collapsable",role:"button",children:Object(ee.jsx)("span",{children:"Info"})}),Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsx)(j.Col,{xs:6,children:Object(ee.jsx)("h3",{className:"SingleContentConfigFormBody__contentTitle",children:"Content: -"})}),Object(ee.jsxs)(j.Col,{xs:6,className:"SingleContentConfigFormBody__addButtons",children:[Object(ee.jsx)(p.b,{to:"/singleconfigpage",children:Object(ee.jsxs)(j.Button,{bsStyle:"primary",children:[this.props.selectedContent.length?"Edit":"Add existing"," content"]})}),Object(ee.jsx)(j.Button,{className:"AddContentTypeFormBody__save--btn",bsStyle:"primary",onClick:this.handleAddNewContent,children:"Add new content"})]})]}),Object(ee.jsx)("div",{style:{marginTop:"1rem"}}),Object(ee.jsx)(ce,{setTemplateId:this.props.setTemplateId,templateList:this.state.templateList,content:this.state.selectedContent,selectedContent:this.props.selectedContent})]})})})})})}}]),n}(i.Component),de=n(145),pe=n(351),he=n(89),be=n(138),me=n(334),ge=1,fe=function(e){return ge+=1,Object(ee.jsx)(be.a,{accordion:!0,id:ge,style:{marginBottom:"5px"},children:e&&Object.keys(e).length>0?Pe(e)?xe(P,0,e.url):Object.keys(e).filter((function(e){return Re(e)})).map((function(t,n){var a,o;return Oe(e)&&t&&(Number(t)||0===Number(t))?(e[t]&&((a=je(e[t]))&&!Number(a)?delete(o=Object(O.a)({},e[t])).__component:(a=t,o=e[t])),a&&(Number(a)||0===Number(a))&&(a=(a=Number(a)+1).toString())):(a=t,o=e[t]),xe(a,n,o)})):Object(ee.jsx)("span",{children:"No data available"})})},je=function(e){if(e&&Object.keys(e).includes("__component")){var t=e.__component&&e.__component.split(".");if(t&&t.length>0)return t[1]&&t[1].indexOf("-")?t[1].replace("-","_"):t[1]}},Oe=function(e){return!!e&&!!Array.isArray(e)},xe=function(e,t,n){return Object(ee.jsxs)(me.a,{eventKey:t,children:[ye(e,n),Ne(n)&&ve(n,!0)]},t)},ye=function(e,t){return Object(ee.jsx)(me.a.Heading,{children:Ne(t)&&!Pe(t)?we(e):Ce(e,t)})},Ce=function(e,t){return Object(ee.jsx)(me.a.Title,{children:Object(ee.jsxs)(he.Grid.Row,{className:"show-grid",style:{display:"flex",fontSize:R},children:[Object(ee.jsx)(he.Grid.Col,{style:{width:"10%",marginLeft:"2.5rem",wordBreak:"break-word"},children:Object(ee.jsx)("div",{children:Object(ee.jsx)("strong",{children:Pe(t)&&Ie(e)?"Photo "+e.charAt(0).toUpperCase()+e.slice(1):e.charAt(0).toUpperCase()+e.slice(1)})})}),Object(ee.jsx)(he.Grid.Col,{style:{width:"90%",marginLeft:"1rem"},children:Pe(t)?Se(t[P.toLowerCase()]):Se(t)})]})})},we=function(e){return Object(ee.jsx)(me.a.Title,{toggle:!0,style:{marginLeft:"-1rem",fontSize:R},children:Object(ee.jsx)("span",{children:Object(ee.jsx)("strong",{children:e.charAt(0).toUpperCase()+e.slice(1)})})})},ve=function(e,t){return t?Object(ee.jsx)(me.a.Body,{collapsible:!0,children:fe(e)}):Object(ee.jsx)(me.a.Body,{collapsible:!0,children:Object(ee.jsx)("span",{children:e})})},Se=function(e){return null===e||void 0===e?Object(ee.jsx)("span",{children:" - "}):"boolean"===typeof e?Object(ee.jsx)("span",{children:e.toString()}):"string"===typeof e?ke(e)?Object(ee.jsx)("img",{src:"http://172.40.0.142:1337"+e,width:"50px",height:"50px",alt:"image"}):Te(e)?Object(ee.jsx)("span",{children:se()(new Date(e)).format(k)}):Object(ee.jsx)("span",{style:{wordBreak:"break-word"},children:e}):"number"===typeof e?Object(ee.jsx)("span",{children:e}):"object"===typeof e?e:Object(ee.jsx)("span",{children:" - "})},Te=function(e){return!!(e&&e&&e.endsWith("Z")&&24===e.length&&10===e.split("T")[0].length&&13===e.split("T")[1].length)},ke=function(e){var t,n=Object(de.a)(N);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(e.toUpperCase().endsWith(a))return!0}}catch(o){n.e(o)}finally{n.f()}return!1},Ne=function(e){return!!e&&"object"===typeof e},Pe=function(e){var t=e&&Object.keys(e);return!!(t&&t.includes("ext")&&t.includes("formats")&&t.includes("url")&&N.includes(e.ext.toUpperCase()))},Ie=function(e){return!!(e&&Number(e)&&Number(e)>=0)},Re=function(e){return!I.includes(e)},Be=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).toggleTab=function(e){o.state.dataToShowOnModal.localizations&&o.state.dataToShowOnModal.localizations.length>0&&o.getCollectionByLocaleName(o.state.currentCode[e]),o.setState({activeTabKey:e})},o.getLocaleInfo=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:t=e.sent,o.setState({localeInfo:t});case 4:case"end":return e.stop()}}),e)}))),o.componentDidMount=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.getLocaleInfo();case 1:case"end":return e.stop()}}),e)}))),o.getCollectionByLocaleName=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(o.props.collectionType,t);case 2:n=e.sent,t===o.props.contentId?o.setState({dataToShowOnModal:Object(O.a)({},n)}):o.setState({dataToShowOnModalRestTabs:Object(O.a)({},n)});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.componentDidUpdate=function(){var e=Object(b.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.props.collectionType||!o.props.contentId){e.next=8;break}if(t.collectionType===o.props.collectionType&&t.contentId===o.props.contentId){e.next=8;break}return e.next=4,H(o.props.collectionType,o.props.contentId);case 4:a=e.sent,o.setState({dataToShowOnModal:Object(O.a)({},a)}),o.setState({dataToShowOnModalRestTabs:Object(O.a)({},a)}),o.setState({activeTabKey:0});case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o.state={show:!0,collectionTypes:[],mockRows:[],selectedContent:[],selectedCollectionType:null,collectionAttributes:o.props.dummyData,activeTabKey:0,dataToShowOnModal:{},localeInfo:[],currentCode:[o.props.contentId],dataToShowOnModalRestTabs:{}},o.toggleTab=o.toggleTab.bind(Object(m.a)(o)),o.getCollectionByLocaleName=o.getCollectionByLocaleName.bind(Object(m.a)(o)),o}return Object(o.a)(n,[{key:"getLocaleFullName",value:function(e){return this.state.localeInfo.filter((function(t){return t.code===e}))[0].name}},{key:"render",value:function(){var e,t=this;return Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsxs)(j.Modal,(e={dialogClassName:"ContentsFilterModal",show:this.props.show,onHide:this.props.onHide},Object(ae.a)(e,"onHide",this.state.currentCode=[this.props.contentId]),Object(ae.a)(e,"children",[Object(ee.jsx)(j.Modal.Header,{children:Object(ee.jsx)(j.Modal.Title,{children:this.state.dataToShowOnModal&&Object.keys(this.state.dataToShowOnModal).length>0&&this.props.fetchTitleOrName(this.state.dataToShowOnModal)})}),Object(ee.jsxs)(j.Modal.Body,{children:[Object(ee.jsx)("div",{className:"CollapsibleSection__title no-padding",role:"button",tabIndex:0}),Object(ee.jsx)("div",{children:Object(ee.jsxs)(j.Tabs,{id:"id",activeKey:this.state.activeTabKey,onSelect:this.toggleTab,children:[this.state.dataToShowOnModal&&this.state.dataToShowOnModal.locale&&Object(ee.jsx)(j.Tab,{eventKey:0,title:this.getLocaleFullName(this.state.dataToShowOnModal.locale).split(" ")[0],style:{overflowY:"auto",height:"38rem",overflowX:"hidden"},children:fe(this.state.dataToShowOnModal)}),this.state.dataToShowOnModal.localizations&&this.state.dataToShowOnModal.localizations.length>0&&this.state.dataToShowOnModal.localizations.map((function(e,n){return t.state.currentCode.push(e.id),Object(ee.jsx)(j.Tab,{eventKey:n+1,title:t.getLocaleFullName(e.locale).split(" ")[0],style:{overflowY:"auto",height:"38rem",overflowX:"hidden"},children:fe(t.state.dataToShowOnModalRestTabs)})}))]})})]}),Object(ee.jsx)(j.Modal.Footer,{children:Object(ee.jsx)(j.Button,{bsStyle:"primary",onClick:this.props.onHide,children:"Ok"})})]),e))})}}]),n}(i.Component),Fe=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).componentDidMount=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.setCollectionTypeState();case 2:o.shouldShowEtSaveBtn("hidden");case 3:case"end":return e.stop()}}),e)}))),o.componentWillUnmount=function(){o.shouldShowEtSaveBtn("visible")},o.shouldShowEtSaveBtn=function(e){var t,n=Object(de.a)(document.getElementsByClassName("pull-right save btn btn-primary"));try{for(n.s();!(t=n.n()).done;){t.value.style.visibility=e}}catch(a){n.e(a)}finally{n.f()}},o.componentDidUpdate=function(){var e=Object(b.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t.selectedCollectionType!==o.props.selectedCollectionType||n.pageSize!==o.state.pageSize&&!o.state.searchBtnClk)&&o.setState({page:1,pageInput:1,currPageWillUpdating:1},Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.getContentsByCollectionType(o.state.selectedCollectionType[0].value,o.state.page,o.state.pageSize);case 2:case"end":return e.stop()}}),e)})))),n.page===o.state.page||o.state.searchBtnClk){e.next=5;break}return o.setState({selectedContent:null}),e.next=5,o.getContentsByCollectionType(o.state.selectedCollectionType[0].value,o.state.page,o.state.pageSize);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o.filterUidByApiPrefix=function(e){return e.filter((function(e){return e.uid.startsWith("api::")}))},o.open=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.setState({show:!0,contentDetailsOnModal:t,contentIdForModal:t&&t.id});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.close=function(){o.setState({show:!1})},o.handleCollectionTypeChange=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.searchByKey="",o.setState({contents:[]}),n=t[0],o.setState({selectedCollectionType:t}),!n||!n.value){e.next=10;break}return e.next=7,o.getContentsByCollectionType(n.value);case 7:o.props.setSelectedContentName(n.value),e.next=11;break;case 10:o.props.setSelectedContentName(null);case 11:o.setState({contentIdForModal:void 0,currPageWillUpdating:1});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.getContentsByCollectionType=function(){var e=Object(b.a)(f.a.mark((function e(t,n,a){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t,n,a);case 2:r=e.sent,o.setState({contents:r.results,lastPage:r.pagination.pageCount,page:r.pagination.page,pageSize:r.pagination.pageSize,totalItems:r.pagination.total});case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),o.renderToggleButton=function(e){e.isMenuShown;var t=e.onClick;return Object(ee.jsx)("button",{type:"button",style:{position:"absolute",height:"100%",top:"0px",right:"0px",border:"1px solid lightgray"},onClick:function(e){e.preventDefault(),t(e)},children:Object(ee.jsx)("span",{className:"fa fa-angle-down"})})},o.setPage=function(e){var t=Number(e);if(!Number.isNaN(e)&&""!==e&&t>0&&t<=o.totalPages()){var n=Object.assign({},o.state.pagination);n.page=t,o.setState({pagination:n,pageChangeValue:t})}},o.onContentSearch=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!o.state.searchQuery){e.next=8;break}return e.next=4,W(o.state.selectedCollectionType[0].value,o.state.searchQuery,o.searchByKey,1,5);case 4:n=e.sent,o.setState({contents:n.results,lastPage:n.pagination.pageCount,page:n.results.length?n.pagination.page:0,currPageWillUpdating:n.results.length?n.pagination.page:0,pageSize:n.pagination.pageSize,totalItems:n.pagination.total,searchBtnClk:!0}),e.next=9;break;case 8:o.getContentsByCollectionType(o.state.selectedCollectionType[0].value);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.handleQueryChange=function(e){e.preventDefault(),o.setState({searchQuery:e.target.value})},o.onPerPageSelect=function(e){o.setState({searchBtnClk:!1}),o.setState({pageSize:e})},o.onPageInput=function(e){o.setState({currPageWillUpdating:e.target.value})},o.onSubmit=function(){+o.state.currPageWillUpdating&&o.state.currPageWillUpdating<=o.state.lastPage&&o.setState({page:+o.state.currPageWillUpdating})},o.fetchTitleOrName=function(e){if(e){var t=Object.keys(e),n=t.findIndex((function(e){return"title"===e.toLowerCase()}));if(n>-1)return o.searchByKey=Object.keys(e)[n],e[Object.keys(e)[n]];if((n=t.findIndex((function(e){return"name"===e.toLowerCase()})))>-1)return o.searchByKey=Object.keys(e)[n],e[Object.keys(e)[n]];var a=t.filter((function(e){return!I.includes(e)}));if(a&&a.length)return o.searchByKey=a[0],e[a[0]]}return o.searchByKey="","-"},o.state={page:1,currPageWillUpdating:1,pageSize:5,totalItems:20,lastPage:4,pageInput:1,pageChangeValue:1,show:!1,contentDetailsOnModal:{},searchQuery:"",setSearchBy:"",searchBtnClk:!1,collectionType:[],selectedCollectionType:[],contents:[],selectedContent:null,contentIdForModal:""},o.searchByKey="",o}return Object(o.a)(n,[{key:"setCollectionTypeState",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,n=t.data,a=this.filterUidByApiPrefix(n),this.setState({collectionType:a.map((function(e){return{label:e.info.displayName,value:e.info.singularName}}))});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changePage",value:function(e){this.setState({page:e,currPageWillUpdating:e})}},{key:"render",value:function(){var e=this,t={page:this.state.page,perPage:this.state.pageSize,perPageOptions:C},n=0===this.state.totalItems?0:(this.state.page-1)*this.state.pageSize+1,a=Math.min(this.state.page*this.state.pageSize,this.state.totalItems);return Object(ee.jsxs)(j.Grid,{children:[Object(ee.jsx)(j.Row,{className:"mt-2",children:Object(ee.jsx)(j.Col,{lg:12,children:Object(ee.jsx)("legend",{children:"Select Content"})})}),Object(ee.jsx)(j.Row,{className:"mt-2",children:Object(ee.jsx)(j.Col,{lg:3,children:Object(ee.jsx)("h6",{children:Object(ee.jsx)("b",{children:w})})})}),Object(ee.jsx)(j.Row,{children:Object(ee.jsx)(j.Col,{lg:3,children:Object(ee.jsx)(pe.a,{id:"collectionTypeDropdown",placeholder:w,options:this.state.collectionType,onChange:this.handleCollectionTypeChange,selected:this.state.selectedCollectionType,children:function(t){var n=t.isMenuShown,a=t.toggleMenu;return e.renderToggleButton({isMenuShown:n,onClick:a})}})})}),Object.keys(this.state.selectedCollectionType).length>0&&Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(j.Row,{className:"mt-2",children:Object(ee.jsx)(j.Col,{lg:3,children:Object(ee.jsx)("h5",{style:{marginBottom:"0px"},children:Object(ee.jsx)("strong",{children:this.state.selectedCollectionType&&this.state.selectedCollectionType[0]&&this.state.selectedCollectionType[0].label})})})}),Object(ee.jsx)(j.Row,{children:Object(ee.jsx)(j.Col,{lg:12,children:Object(ee.jsx)("div",{className:"ContentsFilter well",role:"button",tabIndex:0,style:{margin:"1rem 0rem"},children:Object(ee.jsxs)("form",{children:[Object(ee.jsxs)("div",{style:{display:"flex",margin:"1rem 0rem"},children:[Object(ee.jsx)("button",{id:"dropdown-example",role:"button","aria-haspopup":"true","aria-expanded":"false",type:"button",className:"dropdown-toggle btn btn-default",children:v}),Object(ee.jsx)("input",{type:"search",name:"name",onChange:this.handleQueryChange,role:"combobox",className:"rbt-input-main form-control rbt-input",placeholder:"Search Content By Name..."})]}),Object(ee.jsx)("div",{className:"pull-right mbt10",style:{margin:"0 0 10px 0"},children:Object(ee.jsx)("button",{className:"btn btn-primary",onClick:this.onContentSearch,children:"Search"})})]})})})}),Object(ee.jsx)(j.Row,{className:"mt-2",children:Object(ee.jsxs)(j.Col,{lg:12,children:[Object(ee.jsxs)("table",{className:"table dataTable table-striped table-bordered table-hover",children:[Object(ee.jsx)("thead",{children:Object(ee.jsx)("tr",{children:Object.keys(S).map((function(e){return Object(ee.jsx)("th",{children:S[e]},e)}))})}),Object(ee.jsx)("tbody",{children:this.state.contents.map((function(t){return Object(ee.jsxs)("tr",{children:[Object(ee.jsx)("td",{width:"5%",align:"center",children:Object(ee.jsx)("input",{onClick:function(){e.setState({selectedContent:t})},type:"radio",id:t+t.id,name:"content",value:t.id})}),Object(ee.jsx)("td",{role:"button",onClick:function(){return e.open(t)},children:e.fetchTitleOrName(t)}),Object(ee.jsx)("td",{role:"button",onClick:function(){return e.open(t)},children:"".concat(t.createdBy.firstname," ").concat(t.createdBy.lastname)}),Object(ee.jsx)("td",{role:"button",onClick:function(){return e.open(t)},children:se()(new Date(t.updatedAt)).format(k)}),Object(ee.jsx)("td",{role:"button",onClick:function(){return e.open(t)},children:se()(new Date(t.publishedAt)).format(k)})]},t.id)}))})]}),Object(ee.jsx)("div",{className:"custom-page"}),Object(ee.jsx)(j.PaginationRow,{itemCount:this.state.totalItems,itemsStart:n,itemsEnd:a,viewType:"table",pagination:t,amountOfPages:this.state.lastPage,pageInputValue:this.state.currPageWillUpdating,onPageSet:this.changePage,onPerPageSelect:this.onPerPageSelect,onFirstPage:function(){return e.changePage(1)},onPreviousPage:function(){return e.changePage(e.state.page-1)},onPageInput:this.onPageInput,onNextPage:function(){e.setState({searchBtnClk:!1}),e.changePage(e.state.page+1)},onLastPage:function(){e.setState({searchBtnClk:!1}),e.changePage(e.state.lastPage)},onSubmit:this.onSubmit})]})}),Object(ee.jsxs)(j.Row,{className:"SingleContentConfigFormBody__actionBar row",children:[Object(ee.jsx)(j.Col,{sm:9}),Object(ee.jsx)(j.Col,{sm:3,className:"SingleContentConfigFormBody__addButtons",children:Object(ee.jsxs)(p.b,{to:"/",children:[Object(ee.jsx)("button",{className:"btn-default btn",children:"Cancel"}),Object(ee.jsx)("button",{className:"btn-primary btn AddContentTypeFormBody__save--btn",onClick:function(){return e.props.setContent([e.state.selectedContent])},disabled:!this.state.selectedContent,children:"Save"})]})})]})]}),Object(ee.jsx)(Be,{show:this.state.show,onHide:this.close,contentDetailsOnModal:this.state.contentDetailsOnModal,contentId:this.state.contentIdForModal,collectionType:this.state.selectedCollectionType&&this.state.selectedCollectionType.length&&this.state.selectedCollectionType[0].value,fetchTitleOrName:this.fetchTitleOrName})]})}}]),n}(i.Component),Me=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).setContent=function(e){o.setState({selectedContent:e}),e.length&&o.setState({selectedContentId:e[0].id})},o.setSelectedContentName=function(e){o.setState({selectedContentName:e,name:e,nameTwo:e})},o.setTemplateId=function(e){o.setState({selectedTemplateId:e})},o.state={selectedContent:[],selectedContentId:0,selectedTemplateId:"default",selectedContentName:null,name:"",nameTwo:"nameTwoVar"},o}return Object(o.a)(n,[{key:"render",value:function(){return Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsx)(p.a,{children:Object(ee.jsxs)(h.c,{children:[Object(ee.jsx)(h.a,{path:"/",exact:!0,children:Object(ee.jsx)(ue,{selectedContent:this.state.selectedContent,setTemplateId:this.setTemplateId})}),Object(ee.jsx)(h.a,{path:"/singleconfigpage",exact:!0,children:Object(ee.jsx)(Fe,{setContent:this.setContent,setSelectedContentName:this.setSelectedContentName})})]})})})}}]),n}(i.Component),Ae=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(a.a)(this,n),console.log("SingleWidgetElement ~ constructor"),(e=t.call(this)).reactRootRef=l.a.createRef(),e.mountPoint=null,e}return Object(o.a)(n,[{key:"config",get:function(){return console.log("GET CONFIG THIS.REACTROOTREF.CURRENT",this.reactRootRef.current),this.reactRootRef.current?this.reactRootRef.current.state:{}},set:function(e){return console.log("BALUE",e),console.log("SET CONFIG",this.reactRootRef.current),this.reactRootRef.current.setState(e)}},{key:"connectedCallback",value:function(){console.log("SingleWidgetElement ~ connectedCallback"),this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),d.a.render(Object(ee.jsx)(Me,{ref:this.reactRootRef}),this.mountPoint)}}]),n}(Object(c.a)(HTMLElement));customElements.get("single-content-widget-config")||customElements.define("single-content-widget-config",Ae);n(810)}},[[811,1,2]]]);
//# sourceMappingURL=main.dc5c30e3.chunk.js.map