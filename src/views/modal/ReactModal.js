import React from 'react';
import Container from '../../components/Container';
import Flex from '../../components/Flex';
import Heading from '../../components/Heading';
import { Button, Input } from '../../components/fields';
import Modal from 'react-modal';
import { customStyles, FormModal } from './ReactModal.styles';

Modal.setAppElement('#root');

const ReactModal = () => {
  //let [toggle, setToggle] = useState(false);
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    if (subtitle) {
      subtitle.style.color = '#f00';
    }
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Container full fullVertical>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Heading h2 center>
          Delete record
        </Heading>
        <Heading h4 center forwardRef={(_subtitle) => (subtitle = _subtitle)}>
          Comfirm transaction?
        </Heading>
        <FormModal>
          <Input />
          <Flex widthPerc justifyEvenly>
            <Button width="35%" margin="10px auto">
              Comfirm
            </Button>
            <Button width="35%" margin="10px auto" onClick={closeModal}>
              Close
            </Button>
          </Flex>
        </FormModal>
      </Modal>
    </Container>
  );
};

export default ReactModal;
