import { Modal } from "antd";
import NameForm from './NameForm'

export default function ChangeNameModal(props) {
  const { submitForm, isModalOpen, closeModal } = props

  return (
    <Modal
      centered
      title="เปลี่ยนชื่อผู้ทำข้อสอบ"
      visible={isModalOpen}
      onCancel={closeModal}
      footer={null}
    >
      <div className="d-flex justify-content-center align-items-center">
        <NameForm buttonText="แก้ไขชื่อ" submitForm={(name) => submitForm(name)} />
      </div>
    </Modal>
  );
}
