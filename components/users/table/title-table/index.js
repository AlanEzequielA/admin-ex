import {Row, Col, Typography, Button, Popover} from "antd";
import {UserForm} from "../../user-form";

export const TitleTable = ({ handleCreate, form }) => (
  <Row justify="center">
    <Col xs={24} md={18}>
      <Typography.Title level={2}>
        Lista de usuarios
      </Typography.Title>
    </Col>
    <Col xs={24} md={6}>
      <Popover
        trigger="click"
        className="create-user-popover"
        placement="topRight"
        content={() => (
          <UserForm
            form={form}
            title="Crear usuario"
            onSave={handleCreate} />
        )}>
        <Button>Agregar usuario</Button>
      </Popover>
    </Col>
  </Row>
)