import { Modal, Icon } from 'semantic-ui-react';

const BasicModal = (props) => {

    const {
        show, 
        setShow,
        title, 
        children,
        ...rest
    } = props;

    const onClose = () => setShow(false);

    return (
        <Modal className="BasicModal" open={show} onClose={onClose} {...rest}>
            <Modal.Header className="BasicModal-header">
                <span className="BasicModal-title">{ title }</span> <Icon className="BasicModal-icon" name="close" onClick={onClose} />
            </Modal.Header>
            <Modal.Content>
                { children }
            </Modal.Content>
        </Modal>
    )
}

export default BasicModal
