// 上面这个代码处理过度动画（默认加上不用管）
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('sidenav-pinned')
    document.body.classList.add('ready')
  }, 200)
})

function tip(msg = 'hints'){
  const toastBox =  document.querySelector('#myToast')
			//the boostrap
			const toast = new bootstrap.Toast(toastBox, {
				animation: true,
				autohide: true,
				delay: 2000,


			})
			toastBox.querySelector('.toast-body').innerHTML = msg

			toast.show()
} 

//setting request root url
axios.defaults.baseURL = 'http://ajax-api.itheima.net'
