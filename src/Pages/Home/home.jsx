import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import DataTable from 'react-data-table-component';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.js';
import { Container } from './style.js';
import { Header } from './style.js';
import { Title } from './style.js';
import { Hr } from './style.js';


  const data = [
    {
      id: 1,
      name: 'Gustavo Santos Teixeira Gama',
      year: '20',
      cpf: '924.190.888-23',
      state: 'SP',
      city: 'São Paulo',
      namePai: 'Jose Gama',
      nameMae: 'Joilene Santos',
      phone: '+55 11 99511-3923',
    },
    {
      id: 2,
      name: 'Leonardo Meucci',
      year: '26',
      cpf: '134.190.868-23',
      state: 'SP',
      city: 'São Paulo',
      namePai: 'Dr. Cecília Nunes',
      nameMae: 'Paula Ribeiro',
      phone: '+55 11 98474-3923',
    },
    {
      id: 3,
      name: 'Maite Santos',
      year: '27',
      cpf: '756.190.868-23',
      state: 'CA',
      city: 'Califórnia',
      namePai: 'Luiz Otávio Campos',
      nameMae: 'Maria Alice das Neves',
      phone: '+55 213 97253-3923',
    },
    {
      id: 4,
      name: 'Renato Rey',
      year: '30',
      cpf: '254.190.868-65',
      state: 'SP',
      city: 'São Paulo',
      namePai: 'Breno da Paz',
      nameMae: 'Dra. Maitê Souza',
      phone: '+55 11 97235-3923',
    },
    {
      id: 5,
      name: 'Wiliian Souza Vivo',
      year: '56',
      cpf: '888.190.868-23',
      state: 'SP',
      city: 'São Paulo',
      namePai: 'Luiz Gustavo Alves',
      nameMae: 'Nicole Rodrigues',
      phone: '+55 11 92222-3923',
    },
    {
      id: 6,
      name: 'Clara Rodrigues',
      year: '56',
      cpf: '777.190.868-23',
      state: 'SP',
      city: 'São Paulo',
      namePai: 'Paulo Ribeiro',
      nameMae: 'Lívia Nogueira',
      phone: '+55 11 92321-3923',
    },
    {
      id: 7,
      name: 'Larissa Pinto',
      year: '42',
      cpf: '666.190.868-23',
      state: 'SP',
      city: 'São Paulo',
      namePai: 'Sr. Nicolas da Cunha',
      nameMae: 'Clarice Cardoso',
      phone: '+55 11 92313-3923',
    },
    {
      id: 8,
      name: 'Luiz Fernando Almeida',
      year: '14',
      cpf: '905.190.868-23',
      state: 'SP',
      city: 'São Paulo',
      namePai: 'Thiago Barros',
      nameMae: 'Sophie Rocha',
      phone: '+55 11 92361-3923',
    },
    {
        id: 9,
        name: 'João Guilherme da Cunha',
        year: '14',
        cpf: '100.190.868-23',
        state: 'SP',
        city: 'São Paulo',
        namePai: 'Luigi Aragão',
        nameMae: 'Ana Vitória Nunes',
        phone: '+55 11 92374-3923',
      },
      {
        id: 10,
        name: 'Pedro Miguel da Cunha',
        year: '14',
        cpf: '495.190.868-23',
        state: 'SP',
        city: 'São Paulo',
        namePai: 'Diogo Correia',
        nameMae: 'Elisa Azevedo',
        phone: '+55 11 92451-3923',
      },
      {
        id: 11,
        name: 'Nathan Costa',
        year: '14',
        cpf: '532.190.868-23',
        state: 'SP',
        city: 'São Paulo',
        namePai: 'Diogo Correia',
        nameMae: 'Dra. Natália Moraes',
        phone: '+55 11 93232-3923',
      },
      {
        id: 12,
        name: 'Ana Júlia Fernandes',
        year: '14',
        cpf: '415.190.868-23',
        state: 'SP',
        city: 'São Paulo',
        namePai: 'Arthur Cardoso',
        nameMae: 'Maria Fernanda da Rosa',
        phone: '+55 11 92321-3923',
      },
      {
        id: 13,
        name: 'Esther Pereira',
        year: '20',
        cpf: '131.190.868-23',
        state: 'SP',
        city: 'São Paulo',
        namePai: 'Sr. Leonardo Sales',
        nameMae: 'Marina Rodrigues',
        phone: '+55 11 92323-3923',
      },
  ]


function Home(args) {

    const columns = [
        {
          name: 'Nome',
          selector: row => row.name,
        },
        {
          name: 'Idade',
          selector: row => row.year,
          sortable: true,
        },
        {
          name: 'CPF',
          selector: row => row.cpf,
          sortable: true,
        },
        {
          name: 'Estado',
          selector: row => row.state,
          sortable: true,
        },
        {
          name: 'Cidade',
          selector: row => row.city,
          sortable: true,
        },
        {
          name: '',
          button: true,
          cell: (row) => <Button color="primary" onClick={() => toggle(row)}>Detalhes</Button>,
        },
      ];

    const [selectedData, setSelectedData] = useState(null);
    const [modal, setModal] = useState(false);
    const toggle = (row) => {
        setModal(!modal);
        setSelectedData(row);
    }


  return (
    <Container>
      <Header>
        <div>
          <Title>Lista de usuários</Title>
          <Hr />
        </div>
        <DataTable
          columns={columns}
          data={data}
          pagination
        />
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader>Detalhes do usuário</ModalHeader>
        <ModalBody>
          {selectedData && <>
          <p className='text'><b>Nome:</b> {selectedData.name} </p>
          <hr />
          <p className='text'><b>Idade:</b> {selectedData.year} </p>
          <hr />
          <p className='text'><b>CPF:</b> {selectedData.cpf} </p>
          <hr />
          <p className='text'><b>estado:</b> {selectedData.state} </p>
          <hr />
          <p className='text'><b>Cidade:</b> {selectedData.city} </p>
          <hr />
          <p className='text'><b>Nome do pai:</b> {selectedData.namePai} </p>
          <hr />
          <p className='text'><b>Nome da mãe:</b> {selectedData.nameMae} </p>
          <hr />
          <p className='text'><b>Telefone:</b> {selectedData.phone} </p>
          </>}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => toggle(null)}>
            Voltar
          </Button>
        </ModalFooter>
      </Modal>
      </Header>
    </ Container>
  );
}

export default Home;
