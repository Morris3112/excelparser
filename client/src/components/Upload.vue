<template>
  <div class="datamanagement tabs-wrapper">
    <div v-show="tab === 0" class="tab-content">
      <div class="planning-row">
        <div class="planning-main">
          <div class="datatable-wrapper">
            <wb-data-table v-bind="trainOrderDataTableProperties"></wb-data-table>
          </div>
        </div>
      </div>
    </div>
    <div v-show="tab === 1" class="tab-content">
      <div class="planning-row">
        <div class="planning-main">
          <h2>Select a wagon upload file</h2>
          <fileupload :target="getUrl()" action="POST" v-on:progress="progress" v-on:start="startUpload" v-on:finish="finishUpload"></fileupload>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import Datepicker from 'vuejs-datepicker';
  import moment from 'moment'
  // import wbDataTable from 'WBDataTable';
  // import managedata from '../../../helpers/managedata.js';
  var FileUpload = require('vue-simple-upload')
  export default{
    name: 'dataManagement',
    components: {
      'fileupload': FileUpload.FileUpload
    },
    created () {
      this.trainOrderDataTableProperties.columns = this.trainOrderColumns
      this.loadTrainOrders(moment(this.calendarDate).format('YYYY-MM-DD'))
    },
    mounted () {
    },
    methods: {
      getUrl () {
        return managedata.getApiUrl() + "containers/wagons/upload?date="+this.calendarDate
      },
      startUpload (e) {
        // file upload start event
        console.log(e);
      },
      finishUpload (e) {
        // file upload finish event
        console.log(e);
      },
      progress (e) {
        // file upload progress
        // returns false if progress is not computable
        console.log(e);
      },
      selectDate () {
        this.$nextTick(() => {
          this.loadTrainOrders(moment(this.calendarDate).format('YYYY-MM-DD'));
        });
      }//,
      // loadTrainOrders (date) {
      //   managedata.loadTrainOrders(date,
      //     res => {
      //       this.trainOrderDataTableProperties.dataext = res.data;
      //     },
      //     err => {
      //       console.log(err);
      //     }
      //   );
      // },
    },
    data () {
      return {
        tab: 0,
        calendarDate: moment().format('YYYY-MM-DD'),
        trainOrderDataTableProperties: {
          allowCreation: true,
          dataext: [],
          indentHeight: "300",
          columns: this.trainOrderColumns,
          tableName: 'Train orders',
          hasControls: true,
          showTitle: true,
          height: '79vh',
        },
        trainOrderColumns: [
          {name: 'product', displayName: 'Product', visible: true, type:'string', isEditable:true},
          {name: 'calledOff',  displayName:'Called Off', visible: true, type:'string', isEditable: true},
          {name: 'isLoading', displayName: 'Is Loading', visible: true, type:'string', isEditable:true},
          {name: 'dispatchDate', displayName: 'Dispatch Date', visible: true, type:'string', isEditable:true},
          {name: 'orderNumber',  displayName:'Order Number', visible: true, type:'string', isEditable: true},
          {name: 'dueDate', displayName: 'Due Date', visible: true, type:'string', isEditable:true},
          {name: 'id', displayName: 'Id', visible: true, type:'number', isEditable:false}
        ],
      }
    }
  }
</script>

<style>
  .datamanagement {
    background: #4a4a4a;
  }
  .datamanagement .planning-main {
    overflow: visible;
  }
  .datatable-wrapper {
    border: 1px solid #979797;
  }
  .datatable-wrapper .container-fluid .md-card {
    background: #4a4a4a;
    box-shadow: none;
    color: #ffffff;
  }
  .datatable-wrapper .md-table .md-table-cell,
  .datatable-wrapper .md-table .md-table-head,
  .datatable-wrapper .md-table .md-table-cell:hover,
  .datatable-wrapper .md-table .md-table-head:hover {
    color: #ffffff;
  }
  .datatable-wrapper .datatable .md-table-header .md-table-row {
    background: #919191;
  }
  .datatable-wrapper .md-input-container.md-has-value input, .md-input-container.md-has-value textarea {
    color: #ffffff;
  }
</style>
