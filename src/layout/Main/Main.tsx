import { Link, Outlet } from 'react-router-dom'
import { Groups, Header } from '../../style'

const Main = () => {
  return (
    <div>
      <Header $padding={10}>
        <Groups $gap={10} $alignItems={'center'}>
          <Link to={"/"}>Сделки</Link>
          <Link to={"/log"}>Журнал</Link>s
        </Groups>
      </Header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Main