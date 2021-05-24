<template>
    <div>
        <table>
            <tr v-for="i in r_arr" :key="i">
                <!-- <td v-for="j in c_arr" :key="j">{{result_caculate[i][j]}}</td> -->
                <td v-for="j in c_arr" :key="j">
                    <div class="item" :class="result_caculate[i][j]">
                        <span>D</span>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: ['arr_input'],

    data() {
        return {
            col: 75,
            row: 12,
            c_arr: [],
            r_arr: [],
        };
    },

    created() {
        for (let i = 0; i < this.col; i++) this.c_arr.push(i);
        for (let i = 0; i < this.row; i++) this.r_arr.push(i);
    },

    computed: {
        result_caculate() {
            let table = [];
            let row = 12;
            let col = 75;

            const arr = this.arr_input;

            function create_table() {
                table = [];

                for (let i = 0; i < row; i++) {
                    let tg = [];
                    for (let j = 0; j < col; j++) {
                        tg.push(null);
                    }
                
                    table.push(tg);
                }
            }

            create_table();

            let r = 0;
            let c = 0;
            let c_change = 0;

            // điền ô đầu tiên
            table[r][c] = arr[0];

            for(let i = 1; i < arr.length; i++) {
                // nếu nếu phần tử tiếp theo bằng phần tử trước điền vào cùng hàng
                if(arr[i-1] === arr[i]){
                    // nếu chưa điền đến ô 12
                    if(r < 11){
                        // nếu ô kế tiếp không null hoặc chúng ta đã nhẩy sang cột khác thì tiếp tục điền sang cột tiếp theo cùng hàng
                        if(table[r+1][c] != null || c != c_change){
                            table[r][++c] = arr[i];
                        }
                        // nếu ô kế tiếp null
                        else if(table[r+1][c] == null){
                            table[++r][c] = arr[i];
                        }
                    }

                    // nếu ô 12 đã được điền
                    else{
                        table[r][++c] = arr[i];
                    }
                }
                //  nếu không bằng điền vào cột tiếp theo
                else{
                    c_change++;
                    c = c_change;
                    r = 0;

                    table[r][c] = arr[i];
                }
            }

            return table
        }
    }
};
</script>

<style lang="scss">
    table, th, td {
        border: 2px solid rgb(0, 163, 0);
        border-collapse: collapse;

        .item {
            width: 15px;
            height: 15px;
            padding: 10px;
            margin: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                display: none;
            }
        }   

        .x{ 
            background-color: #00f; 

            span {
                display: inline;
                color: white;
                font-weight: 500;
                font-size: 1rem;
            }    
        }
        .y{ 
            background-color: red; 

            span {
                display: inline;
                color: white;
                font-weight: 700;
                font-size: 1.5rem;
            }
        }
        .p{ background-color: #00f; }
        .b{ background-color: red; }
        .t{ background-color: yellow; }
    }
</style>
