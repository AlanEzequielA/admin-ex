import {Row, Col, Typography, Button, Popover} from "antd";
import {UserForm} from "../../user-form";

export const TitleTable = ({ handleCreate, form }) => (
  <Row justify="space-between">
    <Col>
      <Typography.Title level={2}>
        Lista de usuarios
      </Typography.Title>
    </Col>
    <Col>
      <Popover
        trigger="click"
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