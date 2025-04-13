#!/bin/bash

echo "📁 Creating feature directories and files inside views/ ..."

# Array of "feature:file1 file2 file3"
features=(
  "auth:Login.jsx Register.jsx ForgotPassword.jsx ResetPassword.jsx"
  "users:UsersList.jsx AddUser.jsx EditUser.jsx ViewUser.jsx UserSettings.jsx"
  "dashboard:Dashboard.jsx SummaryCards.jsx AnalyticsCharts.jsx"
  "orders:OrdersList.jsx ViewOrder.jsx UpdateOrderStatus.jsx"
  "settings:ProfileSettings.jsx NotificationSettings.jsx AppPreferences.jsx"
  "error:NotFound.jsx ServerError.jsx"
  "reports:ReportsDashboard.jsx SalesReport.jsx TrafficAnalytics.jsx"
  "notifications:NotificationsList.jsx NotificationSettings.jsx"
  "products:Products.jsx AddProduct.jsx EditProduct.jsx DeleteProduct.jsx ViewProduct.jsx"
)

# Function to generate boilerplate
generate_component() {
  local filepath=$1
  local componentName
  componentName=$(basename "$filepath" .jsx)

  cat > "$filepath" <<EOF
const ${componentName} = () => {
  return (
    <div>
      <h2>${componentName} Component</h2>
    </div>
  );
};

export default ${componentName};
EOF
}

# Iterate through each feature
for entry in "${features[@]}"; do
  feature=$(echo "$entry" | cut -d':' -f1)
  files=$(echo "$entry" | cut -d':' -f2)

  echo "📂 Creating $feature..."
  mkdir -p "$feature"

  for file in $files; do
    filepath="$feature/$file"
    generate_component "$filepath"
    echo "✅ Created $filepath"
  done
done

echo "🎉 All feature folders and test components created successfully!"