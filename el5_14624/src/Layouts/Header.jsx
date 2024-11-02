import Button from "../Components/Button";
const Header = () => {
    return (
        <header className="bg-slate-400 p-3 flex justify-end items-center">
            <Button title='Logout' color='bg-indigo-500' />        
        </header>
      );
}

export default Header