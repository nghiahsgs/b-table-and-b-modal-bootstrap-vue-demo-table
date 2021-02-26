# bootstrap-vue-demo
bootstrap-vue-demo


template cho btable
```html
<b-table striped bordered hover  :busy="isLoading"
         ref="mytable"
         :items="list_cost_all_camp"
         :fields="fields"
         selectable
         :select-mode="selectMode"
         :filter="filter"
         @row-selected="onRowSelected"
         caption-top
         :per-page="perPage"
         :current-page="currentPage"
         @filtered="onFiltered"
         thead-class="bg-info"
         table-class=" table-striped table-bordered"

         :filter-function="filterTable"

>
    <template #cell(key)="row">
        @{{ row.index+1 }}
    </template>
    <template #cell(cost)="data">
    @{{ fomat_price(data.item.cost) }}
    </template>
    <template #table-busy>
        <div class="loader1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </template>
</b-table>
<b-tfood>
    <div style="border-top: 1px solid #dee2e6;" class="pd-10 text-right">
        <strong>Tổng số </strong> @{{ fomat_price(total_list_cost_all_camp)}}
    </div>
</b-tfood>
<div class="d-flex justify-content-between">
    <div class="col-md-3 text-left"><span>Bản ghi hiển thị</span>
        <select class="customPage custom-select"
                style="width: 63px; border-radius: 4px;" v-model="perPage">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
        </select>
    </div>
    <b-pagination
            v-model="currentPage"
            :total-rows="list_cost_all_camp.length"
            :per-page="perPage"
            aria-controls="mytable">
    </b-pagination>
</div>
</div>
                                

```

```js
fields: [
           {
               key: 'key',
               label: 'STT'
           },
           {
               key: 'name',
               label: "Tên chiến dịch",
               headerTitle: "Tên chiến dịch", //tool tip
               sortable: true,
               // class:["class1_a","class1_b","class1_c"],
               tdClass: ["text-left"],
               // thClass: ["class1_a", "class1_b", "class1_c"],
               // stickyColumn:true,
               // variant: 'danger' //active, success, info, warning, danger
           },
           {
               key: 'id',
               label: "Id chiến dịch",
               headerTitle: "Id chiến dịch", //tool tip
               sortable: true,
               tdClass: ["text-left"],
           },
           {
               key: 'cost',
               label: 'Số tiền bị google trừ',
               tdClass: ["text-right"],
               sortable: true,
           },
         ],
```



```
methods:{
                filterTable(row, filter){
                    return row['name'].includes(filter)
                }
         }       
```
