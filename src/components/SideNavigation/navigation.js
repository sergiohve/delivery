import Dining from '../../images/icons/local_dining.svg';
import logout from '../../images/icons/logout.svg';
import { MenuNavigation } from '../../constants/MenuNavigation';
import { Link } from 'react-router-dom';

function Navigation({ url, setUrl }) {
  return (
    <div className='z-20 sm:hidden lg:block fixed bg-gradient-to-t to-[#F85900] from-[#FECB47] w-[106px] h-[964px] rounded-[22px] mt-[10px] mx-[32px] my-[30px]'>
      <div>
        <img src={Dining} alt="dining" width={42} height={42} className='ml-auto mr-auto mt-[20px]' />
      </div>
      <div className='mt-[100px] z-[100] text-[#000]'>
        {
          MenuNavigation.map((inf, i) => {
            return (
              <Link key={inf.id} to={inf.path} onClick={() => setUrl(inf.path)}>
                <div className={`z-1 rounded-[4px] ${url === inf.path ? "bg-white" : ""} focus:bg-white hover:bg-white mt-[50px] hover:opacity-15 opacity-[34%] ml-auto mr-auto w-[38px] h-[37px] cursor-pointer`} />
                <img src={inf.icon} alt={inf.label} width={18} height={17} className='!z-10 -mt-[28px] ml-auto mr-auto ' />
              </Link>
            )
          })
        }
      </div>
      <div className='cursor-pointer'>
        <img src={logout} alt="logout" width={18} height={17} className='ml-auto mr-auto mt-[160px] bottom-0' />
      </div>
    </div>
  )
}

export default Navigation
