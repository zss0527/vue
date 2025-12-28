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