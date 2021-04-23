Vue.component('my-b-table-component', {
    data: function () {
        return {
            currentPage:1,
            perPage:3,

            filter:"",
            isBusy:false,
            items:[
            ],
            rows:0 //rows se tu tinh khi fetch api
        }
    },
    // props:{perPage: Number,fields:Array},
    props:{fields:Array},
    template:`
    <div>
        <label for="">Nhập keyword để tìm kiếm</label>
        <input type="text" v-model="filter">
        <!-- <p>Current Page: {{currentPage}}</p> -->
        
        <b-table bordered small hover foot-clone :busy="isBusy" 
            ref = "mytable"
            :items="items" 
            :fields="fields"
            selectable
            @row-selected="onRowSelected"

            :filter="filter"
            :per-page="perPage"
            :current-page="currentPage"
            @filtered="onFiltered"

            >
            <!-- khai bao la ton tai 1 cot la show_details -->
            <!-- rowSelected la thuoc tinh cua row da dc chon chua -->
            <template #cell(selected_cell)="{ rowSelected }">
                <template v-if="rowSelected">
                    <span aria-hidden="true">&check;</span>
                    <span class="sr-only">Selected</span>
                </template>
                <template v-else>
                    <span aria-hidden="true">&nbsp;</span>
                    <span class="sr-only">Not selected</span>
                </template>
            </template>

            <template #cell(show_details)="row">
            <b-button size="sm" @click="handle_click_detail(row)" class="mr-2">
                Details
            </b-button>
            </template>
            <template #table-busy>
                <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </template>
            <!-- <template #table-caption>This is a table caption at the top.</template> -->
        </b-table>

        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
        ></b-pagination>

        <!-- striped: ngựa vằn : đen trắng xe kẽ -->
        <!-- ordered: các ô đều có viền -->
        <!-- small: các ô nhỏ lại -->
        <!-- hover: di chuột vào thì sáng lên -->
        <!-- foot-clone: foot clone y hệt như head -->
        <!-- stacked: lật ngang thành dọc -->
        <!-- <button @click="fetch_api()">Fetch api</button> -->
    </div>
    `,
    methods:{
        onRowSelected(list_row){
            console.log('list_row select',list_row)
        },
        handle_click_detail(row){
            this.$emit("handle_click_detail",row)

        },
        async fetch_api(){
            this.isBusy = true
            // await axios.get('http://127.0.0.1:5501/b-table-custom.html')
            await new Promise(resolve => setTimeout(resolve, 100));

            this.items = [
                {full_name:"nghia",age:20,job:"coder",full_name2:"nghia",age2:20,job2:"coder"},
                {full_name:"nguyen",age:21,job:"student",full_name2:"nguyen",age2:21,job2:"student"},
                {full_name:"nghia",age:20,job:"coder",full_name2:"nghia",age2:20,job2:"coder"},
                {full_name:"nguyen",age:21,job:"student",full_name2:"nguyen",age2:21,job2:"student"},
                {full_name:"nghia",age:20,job:"coder",full_name2:"nghia",age2:20,job2:"coder"},
                {full_name:"nguyen",age:21,job:"student",full_name2:"nguyen",age2:21,job2:"student"},
                {full_name:"nghia",age:20,job:"coder",full_name2:"nghia",age2:20,job2:"coder"},
                {full_name:"nguyen",age:21,job:"student",full_name2:"nguyen",age2:21,job2:"student"},
                {full_name:"nghia",age:20,job:"coder",full_name2:"nghia",age2:20,job2:"coder"},
                {full_name:"nguyen",age:21,job:"student",full_name2:"nguyen",age2:21,job2:"student"},
                {full_name:"nghia",age:20,job:"coder",full_name2:"nghia",age2:20,job2:"coder"},
                {full_name:"nguyen",age:21,job:"student",full_name2:"nguyen",age2:21,job2:"student"}
            ]
            this.rows = this.items.length
            this.isBusy = false

        },
        onFiltered(filteredItems) {
            this.rows = filteredItems.length
            this.currentPage = 1
        },
    },
    watch:{
        items(){
            console.log("items change")
        }
    },
    mounted:async function(){
        console.log("mounted")
        this.fetch_api()
    }


})