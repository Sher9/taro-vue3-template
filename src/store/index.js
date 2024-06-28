import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            typeList: [
                {
                    label: "安全保卫",
                    value: "c1",
                    icon:"xinwen"
                },
                {
                    label: "办公室",
                    value: "c2",
                    icon:"kehuchaxun"
                },
                {
                    label: "计划财务",
                    value: "c3",
                    icon:"yusuanjisuan"
                },
                {
                    label: "电子银行",
                    value: "c4",
                    icon: "baoxiaozichan",
                },
                {
                    label: "法律法规",
                    value: "c5",
                    icon: "guizhangzhifu",
                },
                {
                    label: "反洗钱",
                    value: "c6",
                    icon: "jianchachaxun",
                },
                {
                    label: "风险管理",
                    value: "c7",
                    icon: "dingqigongzuo",
                },
            ]
        }
    },
    actions: {
        setTabKey(index) {
            this.setTabKey = index
        },
    },
})
