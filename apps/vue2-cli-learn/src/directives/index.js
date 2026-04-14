/**
 * 自定义指令,在使用的元素或者组件上用v-name进行绑定
 * 全局注册Vue.directive('name',directive)
 * 局部注册directives:{directive1,directive2}
 *
 * inserted(el,binding){},当指令所绑定的元素或组件在添加到页面当中的时候所执行的方法
 * update(el,binding){}, 当指令所绑定的元素或组件的值发生改变时所执行的函数
 *  el：所绑定的元素或者组件，类似那个$refs.refName
 *  binding: 从所绑定元素中抽取的binding对象，可以通过binding获取一些属性值
 */
export const color = {
    inserted(el, binding) {
        // console.log('inserted color: ', binding.value);
        el.style.color = binding.value;
    },
    update(el, binding) {
        // console.log('update color: ', binding.value);
        el.style.color = binding.value;
    }
}

export const focus = {
    inserted(el) {
        el.focus()
    }
}

export const loading = {
    inserted(el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
    },
    update(el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
    }
}