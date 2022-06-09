import Logo from '../components/Logo'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'


const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className='container page'>
            {/* Info */}
            <div className='info'>
                <h1>job <span>tracking</span> app</h1>
                <p>
                I'm baby jianbing affogato listicle gastropub glossier seitan pitchfork unicorn food truck portland coloring book. Pug next level tilde post-ironic activated charcoal, prism 8-bit XOXO.
                </p>
                <button className='btn btn-hero'>
                    Login/Register
                </button>
            </div>
            <img src={main} alt='job hunt' className='img main-img'/>
        </div>
    </Wrapper>
  )
}


export default Landing