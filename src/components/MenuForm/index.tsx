import React from 'react';

import { 
     Container,
     Navigation, 
     DropboxLogo, 
     Form } from './styles';

const MenuForm: React.FC = () => {
    function handleToggle() {
        if(window.toggleActiveMenu) window.toggleActiveMenu();
    }
  return (
    <Container>
        <Navigation>
            <h1>
                <DropboxLogo />
                <span>Dropbox</span>
            </h1>

            <button className='action--close' onClick={handleToggle}>✕</button>
        </Navigation>

        <Form>
            <span className='title'>Registre-se</span>
            <span className="subtitle">Preencha o formulário abaixo</span>

            <input type='text' placeholder='Nome'/>
            <input type='text' placeholder='Sobrenome' />
            <input type='email' placeholder='E-mail' />
            <input type='password' placeholder='Senha'/>

            <button>Proseeguir</button>
            <span className="terms">Esta pagina esta sujeita a politica de privacidade e aos termos de serviço</span>
        </Form>
    </Container>
    );
}

export default MenuForm;