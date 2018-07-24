import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.label}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            {this.props.body}
          </ModalBody>
          <ModalFooter>
            {this.props.firstButton &&
              <Button color="primary" onClick={this.toggle}>{this.props.firstButton}</Button>
            }
            {this.props.secondButton &&
              <Button color="danger" onClick={this.toggle}>{this.props.secondButton}</Button>
            }
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
