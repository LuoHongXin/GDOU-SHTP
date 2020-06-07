(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21807c"],{c8f7:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",[a("h3",{staticStyle:{float:"left","margin-left":"10px"}},[t._v("商品信息表")])]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%","padding-left":"50px","margin-top":"20px"},attrs:{"tooltip-effect":"dark","row-key":t.getRowKeys,"expand-row-keys":[10],data:t.tableData}},[a("el-table-column",{attrs:{label:"商品ID",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",[t._v(t._s(e.row._id))])]}}])}),a("el-table-column",{attrs:{label:"商品名",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{contenteditable:"true"}},[t._v(t._s(e.row.PRODUCT_NAME))])]}}])}),a("el-table-column",{attrs:{label:"商品价格",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{contenteditable:"true"}},[t._v(t._s(e.row.PRODUCT_PRICE))])]}}])}),a("el-table-column",{attrs:{label:"商品数量",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{contenteditable:"true"}},[t._v(t._s(e.row.PRODUCT_NUM))])]}}])}),a("el-table-column",{attrs:{label:"商品图片",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-carousel",{attrs:{interval:4e3,type:"card",height:"150px"}},t._l(e.row.PRODUCT_PIC,(function(t){return a("el-carousel-item",{key:t},[a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t}})])})),1)]}}])}),a("el-table-column",{attrs:{label:"商品类型",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{contenteditable:"true"}},[t._v(t._s(t.translateType2(e.row.PRODUCT_CLASS)))])]}}])}),a("el-table-column",{attrs:{label:"发布用户",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{contenteditable:"true"}},[t._v(t._s(e.row.SELLER_NAME))])]}}])}),a("el-table-column",{attrs:{label:"用户宿舍",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{contenteditable:"true"}},[t._v(t._s(e.row.SELLER_DORM))])]}}])}),a("el-table-column",{attrs:{label:"用户电话",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{contenteditable:"true"}},[t._v(t._s(e.row.SELLER_PHONE))])]}}])}),a("el-table-column",{attrs:{label:"用户微信",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{contenteditable:"true"}},[t._v(t._s(e.row.SELLER_WECHAT))])]}}])}),a("el-table-column",{attrs:{label:"用户班级",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{contenteditable:"true"}},[t._v(t._s(e.row.SELLER_CLASS))])]}}])}),a("el-table-column",{attrs:{label:"用户学号",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{contenteditable:"true"}},[t._v(t._s(e.row.SELLER_SNO))])]}}])}),a("el-table-column",{attrs:{label:"发布日期",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.RELEASE_DATE))])]}}])}),a("el-table-column",{attrs:{label:"截止日期",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{contenteditable:"true"}},[t._v(t._s(e.row.DEADLINE))])]}}])}),a("el-table-column",{attrs:{label:"描述",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{attrs:{contenteditable:"true"}},[t._v(t._s(e.row.DESCRIBE))])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e)}}},[t._v("确认编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e)}}},[t._v("删除")])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"30px",float:"right","margin-right":"200px"},attrs:{background:"",layout:"prev, pager, next",total:t.datalength},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"prev-click":t.preChange,"next-click":t.nextChange}})],1)},n=[];const{searchProduct:o,updateProduct:r,delProduct:s}=a("365c"),{translateType:i}=a("ed08");var u={data(){return{loading:!1,tableData:[],arrdelete:[],multipleSelection:[],datalength:0,inputshow:!0,inputshow1:!0,inputshow2:!0,inputshow3:!0,deleteAll:[],pagesize:5,getRowKeys(t){return t.id}}},methods:{translateType2(t){return i(t)},async handleEdit(t){let e=await r({productid:t.row._id,porductname:t.row.PRODUCT_NAME,productprice:t.row.PRODUCT_PRICE,productnum:t.row.PRODUCT_NUM,productclass:t.row.PRODUCT_CLASS,sellername:t.row.SELLER_NAME,sellerdorm:t.row.SELLER_DORM,sellerphone:t.row.SELLER_PHONE,sellerwechat:t.row.SELLER_WECHAT,sellerclass:t.row.SELLER_CLASS,sellersno:t.row.SELLER_SNO,deadline:t.row.DEADLINE,describe:t.row.DESCRIBE});1!==e.code&&alert("修改失败!")},hopo(){this.inputshow1=!this.inputshow1},popo(){this.inputshow=!this.inputshow},dopo(){this.inputshow2=!this.inputshow2},topo(){this.inputshow3=!this.inputshow3},async handleDelete(t){this.tableData.splice(t.$index,1);let e=await s(t.row._id);1!==e.code&&(alert("删除失败"),this.$forceUpdate(this.tableData))},async preChange(t){let{data:e}=await o({pagenum:t,pagesize:this.pagesize});this.tableData=e,this.$forceUpdate()},async nextChange(t){let{data:e}=await o({pagenum:t,pagesize:this.pagesize});this.tableData=e,this.$forceUpdate()},handleSizeChange(t){},async handleCurrentChange(t){let{data:e}=await o({pagenum:t,pagesize:this.pagesize});this.tableData=e,this.$forceUpdate()},toggleSelection(t){t?t.forEach(t=>{this.$refs.multipleTable.toggleRowSelection(t)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange(t){this.multipleSelection=t}},async created(){this.loading=!0;let{data:t}=await o({pagenum:1,pagesize:this.pagesize}),e=await o({});this.tableData=t,this.datalength=e.data,this.loading=!1}},d=u,c=a("623f"),h=Object(c["a"])(d,l,n,!1,null,"0f54333d",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d21807c.be3883e8.js.map