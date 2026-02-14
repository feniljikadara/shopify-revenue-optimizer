import { Page, Layout, Text, Card, Button } from "@shopify/polaris";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader = async () => {
  return json({
    shop: "My Test Store",
  });
};

export default function Index() {
  const { shop } = useLoaderData<typeof loader>();

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card>
            <div style={{ padding: "20px" }}>
              <Text variant="headingXl" as="h1">
                Welcome back, {shop}
              </Text>
              <Text variant="bodyMd" as="p">
                Your Revenue Optimizer is active. Start configuring your Upsell Rules.
              </Text>
              <div style={{ marginTop: "20px" }}>
                <Button primary url="/app/rules">
                  Manage Rules
                </Button>
              </div>
            </div>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card title="Quick Stats" sectioned>
            <Text variant="headingMd" as="h2">
              $0.00 Generated Today
            </Text>
            <Text variant="bodySm" as="p" color="subdued">
              0 Upsells Shown
            </Text>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
