import { Layout as ALayout } from "antd";
import { Header } from "./header";

export const Layout = ({ children }) => (
  <ALayout>
    <ALayout.Header className="header-app">
      <Header />
    </ALayout.Header>
    <ALayout.Content>
      <div className="page-content">
        {children}
      </div>
    </ALayout.Content>
  </ALayout>
)
