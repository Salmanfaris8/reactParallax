import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
        <nav>
            <div className='nav-all d-flex justify-content-between align-items-center p-2 rounded ms-5 me-5 my-4'>
                <a href=""><img width={'150px'} src="https://th.bing.com/th/id/R.4f1cc7b5929ad5b40f8a03e42e2156cb?rik=aeQ1J%2bfStPjCxw&riu=http%3a%2f%2fapplegeniuses.files.wordpress.com%2f2013%2f02%2fcall_of_duty_logo.png&ehk=RMIFXX3kEXZQrbtelgl1Ybr1uIPrZ2VDZGQchspEC%2bk%3d&risl=&pid=ImgRaw&r=0" alt="" /></a>
                <div className='nav-d1 d-flex justify-content-between w-50'>
                    <a href="">GAMES</a>
                    <a href="">NEWS</a>
                    <a href="">STORE</a>
                    <a href="">ESPORTS</a>
                    <a href="">SUPPORT</a>
                    <a href="">GAME PASS</a>
                </div>
                <div className='nav-d1'>
                    <a href=""><i className="nav-i fa-regular fa-user me-2 text-white"></i>LOGIN</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigation