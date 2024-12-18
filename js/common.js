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

//username (many pages needed)
const username = document.querySelector('.navbar-nav .font-weight-bold')

if(username){
	username.innerHTML = localStorage.getItem('user-username')


}

const logout = document.querySelector('#logout')
if(logout){
	logout.addEventListener('click',function(){

		//remove the token 
	     localStorage.removeItem('user-token')
		 localStorage.removeItem('user-username')



		// go to login.html

		location.href= './login.html'

	})

}

   