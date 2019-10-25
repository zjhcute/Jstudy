<template>
    <div class="calendar">
        <div class="time">
            <div class="prev-month"
                @click="prevClick"
            >&lt;-</div>
            <div class="curr-time">{{nowYear}}年{{nowMonth}}月{{nowDay}}日</div>
            <div class="next-month"
                @click="nextClick"
            >-&gt;</div>
        </div>
        <div class="week">
            <div class="week-item" 
                v-for="item in ['日', '一', '二', '三', '四', '五', '六']"
                :key=item>
                {{item}}
            </div>
        </div>
        <div class="days">
            <div class="days-item other-item"
            v-for="item in prevDays"
            :key="`${item}_1`"
            >
            {{item - prevDays + prevAllDays}}
            </div>
            <div class="days-item"
            v-for="item in allDays"
            :key="`${item}_2`"
            :class="{
                        'today-item': nowYear == new Date().getFullYear() && nowMonth == new Date().getMonth() + 1 && item == new Date().getDate(),
                        'choose-item': item == nowDay    
                    }"
            @click="chooseClick(item)"
            >
            {{item}}
            </div>
            <div class="days-item other-item"
            v-for="item in (42-this.prevDays-this.allDays)"
            :key="`${item}_3`"
            >
            {{item}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nowYear: null,
            nowMonth: null,
            nowDay: null,   
        }
    },
    created() {
        this.getInitTime();
    },
    methods: {
        getInitTime() {
            const date = new Date();
            this.nowYear = date.getFullYear();
            this.nowMonth = date.getMonth() + 1;
            this.nowDay = date.getDate();
        },
        chooseClick(item) {
            this.nowDay = item;
        },
        prevClick(e){
            if(this.nowMonth == 1) {
                this.nowMonth = 12,
                this.nowYear --;
            }else {
                this.nowMonth --;
            }
            if(this.nowDay > this.prevAllDays) {
                this.nowDay = this.prevAllDays
            }
        },
        nextClick(e) {
            if(this.nowMonth == 12) {
                this.nowMonth = 1,
                this.nowYear ++;
            }else {
                this.nowMonth ++;
            }
            if(this.nowDay > this.nextAllDays) {
                this.nowDay = this.nextAllDays
            }
        }
    },
    computed: {
        allDays() {
            return new Date(this.nowYear, this.nowMonth, 0).getDate();
        },
        prevAllDays() {
            return new Date(this.nowYear, this.nowMonth - 1, 0).getDate();
        },
        prevDays() {
            return (new Date(this.nowYear, this.nowMonth - 1, 1).getDay()) % 7;
        },
        nextAllDays() {
            return new Date(this.nowYear, this.nowMonth, 0).getDate();
        }
    },
}
</script>

<style >
    .calendar {
        width: 100vw;
        height: 500px;
    }
    .calendar .time {
        width: 100%;
        height: 40px;
        display: flex;
    }
    .calendar .time .prev-month,
    .calendar .time .next-month {
        width: 50px;
        height: 100%;
        text-align: center;
        font-size: 40px;
        line-height: 40px;
        font-weight: bolder;
        color: #08f;
    }
    .calendar .curr-time {
        flex: 1;
        text-align: center;
        color: #0bf;
        font-size: 20px;
        line-height: 40px;
    }
    .calendar .week {
        width: 100%;
        height: 40px;
        display: flex;
    }
    .calendar .week .week-item {
        flex: 1;
        background-color: #08f;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        line-height: 40px;
        text-align: center;
    }
    .calendar .days {
        width: 100%;
        height: 420px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
    }
    .calendar .days .days-item {
        flex-basis: 14vw;
        height: 70px;
        flex-grow: 1;
        box-sizing: border-box;
        text-align: center;
        line-height: 70px;
    }
    .calendar .days .days-item.today-item {
        background-color: #0bf;
        color: #fff;
    }
    .calendar .days .days-item.choose-item {
        border: 2px solid #0bf;
    }
    .calendar .days .days-item.other-item {
        color: #ccc;
    }
</style>