export default {
    state:{
        isCollapse:false,
        tabsList:[{                path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "Home/home",}]//面包屑数据
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,val) {
            if (val.name !== 'home') {
                const index = state.tabsList.findIndex(item =>item.name === val.name)
                if (index === -1) {
                    state.tabsList.push(val)
                }
            }
        },
        closeTag(state,item){
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index,1)
        }
    }
}