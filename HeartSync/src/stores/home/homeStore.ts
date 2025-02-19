import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { DiscoverItem } from '@/types/discover'

export const useHomeStore = defineStore('home', () => {
    const discover = ref<DiscoverItem[]>([{
        "id": "67a18c22000000001902e210",
        "title": "真的不允许痘肌星人还不知道它！",
        "type": "video",
        "likes":1234,
        "cover": {
            "url": "https:\u002F\u002Fsns-webpic.xhscdn.com\u002F856331e3-3273-f207-7e23-428161d5877d?imageView2\u002F2\u002Fw\u002F540\u002Fformat\u002Fjpg",
            "width": 1140,
            "height": 1920
        },
        "user": {
            "id": "65f69c5f000000000b00e222",
            "image": "https:\u002F\u002Fsns-avatar-qc.xhscdn.com\u002Favatar\u002F1040g2jo311c50a0fmm005pfmjhfipoh22f8iepg?imageView2\u002F2\u002Fw\u002F80\u002Fformat\u002Fjpg",
            "nickname": "大布欧aiko"
        },
        "xsecToken": "ABQYbS_Ygpqaw-F1q7bafosltKhp-7S8LKrw6F0ROAfi8="
    }, {
        "id": "6793479b000000002a00e1ea",
        "title": "装修好才半个月就入住？？！我真是胆大！",
        "type": "normal",
        "cover": {
            "url": "https:\u002F\u002Fsns-webpic.xhscdn.com\u002Fe841169c-e48e-c141-12ad-6b36810e13d5?imageView2\u002F2\u002Fw\u002F540\u002Fformat\u002Fjpg",
            "width": 1920,
            "height": 2560
        },
        "user": {
            "id": "5fb898cc00000000010010af",
            "image": "https:\u002F\u002Fsns-avatar-qc.xhscdn.com\u002Favatar\u002F1040g2jo30vtorfpslu6g5ntoj360845f1eehud8?imageView2\u002F2\u002Fw\u002F80\u002Fformat\u002Fjpg",
            "nickname": "小鱼teacher的法式小家"
        },
        "xsecToken": "ABuACYf__qzDT8aXS06NDouFZRnfn7wYlMPpTwAWAGvyw="
    }, {
        "id": "67a05ef900000000180064a1",
        "title": "自媒体人必备收音麦 不允许你还没有",
        "type": "normal",
        "cover": {
            "url": "https:\u002F\u002Fsns-webpic.xhscdn.com\u002F4c60e503-659d-56c9-7aad-65be1b65ff03?imageView2\u002F2\u002Fw\u002F540\u002Fformat\u002Fjpg",
            "width": 2160,
            "height": 2880
        },
        "user": {
            "id": "66ae26c9000000001d030765",
            "image": "https:\u002F\u002Fsns-avatar-qc.xhscdn.com\u002Favatar\u002F1040g2jo3161q24snhe505ple4r4ne1r583rhmeg?imageView2\u002F2\u002Fw\u002F80\u002Fformat\u002Fjpg",
            "nickname": "芒果蘸椒盐"
        },
        "xsecToken": "AB4wyfwi8WTW75q7wkAddlgxVbDLMrW3GMCgrfOFzjMps="
    }, {
        "id": "679364110000000018010a7a",
        "title": "情人节礼物🎁就这样水灵灵出现了！",
        "type": "normal",
        "cover": {
            "url": "https:\u002F\u002Fsns-webpic.xhscdn.com\u002Fc33e36b0-53a3-1222-9edd-987a0992dbb8?imageView2\u002F2\u002Fw\u002F540\u002Fformat\u002Fjpg",
            "width": 750,
            "height": 1000
        },
        "user": {
            "id": "5fcf31dc00000000010090c1",
            "image": "https:\u002F\u002Fsns-avatar-qc.xhscdn.com\u002Favatar\u002F1000g2jo2npafjpqjm06g5nuf67e09461n9fgmlg?imageView2\u002F2\u002Fw\u002F80\u002Fformat\u002Fjpg",
            "nickname": "唯品会"
        },
        "xsecToken": "ABuACYf__qzDT8aXS06NDouD_Bomh9r6Ar76wyCxfl8iI="
    }, {
        "id": "67a2d5c400000000290118b6",
        "title": "嘟嘟薯｜0元送黄金啦❗️🎁 ㊗️开工大吉❗️",
        "type": "normal",
        "cover": {
            "url": "https:\u002F\u002Fsns-webpic.xhscdn.com\u002F9a7e4a8c-06c7-0fc4-c9a4-974b0d3ad63d?imageView2\u002F2\u002Fw\u002F540\u002Fformat\u002Fjpg",
            "width": 1242,
            "height": 1656
        },
        "user": {
            "id": "6233df9e000000001000e421",
            "image": "https:\u002F\u002Fsns-avatar-qc.xhscdn.com\u002Favatar\u002F65f7f642f1073f0001c06a16.jpg?imageView2\u002F2\u002Fw\u002F80\u002Fformat\u002Fjpg",
            "nickname": "嘟嘟薯"
        },
        "xsecToken": "ABawBY28debmdWlFk2GZwym9YyRTj1EIvkri407gTGEVo="
    }])
    const follow = ref([])

    return {
        discover,
        follow
    }
})

