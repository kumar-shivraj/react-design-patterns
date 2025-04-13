#!/bin/bash

BASE_URL="http://localhost:5173"

routes=(
  "/products"
  "/products/add"
  "/products/1"
  "/products/1/edit"
  "/products/1/delete"

  "/auth/login"
  "/auth/register"
  "/auth/forgot-password"
  "/auth/reset-password"

  "/users"
  "/users/add"
  "/users/1"
  "/users/1/edit"
  "/users/settings"

  "/dashboard"
  "/dashboard/summary"
  "/dashboard/analytics"

  "/orders"
  "/orders/1"
  "/orders/1/update"

  "/settings/profile"
  "/settings/notifications"
  "/settings/preferences"

  "/notifications"
  "/notifications/settings"

  "/reports"
  "/reports/sales"
  "/reports/traffic"

  "/500"
  "/some/random-route" # should return 404 (NotFound)
)

echo "🧪 Testing all app routes on $BASE_URL ..."
echo "-----------------------------------------"

for route in "${routes[@]}"; do
  full_url="${BASE_URL}${route}"
  response=$(curl -s -o /dev/null -w "%{http_code}" "$full_url")
  
  if [[ "$response" == "200" ]]; then
    echo "✅ $route -> 200 OK"
  elif [[ "$response" == "404" ]]; then
    echo "⚠️  $route -> 404 Not Found"
  else
    echo "❌ $route -> $response"
  fi
done

echo "-----------------------------------------"
echo "✅ Route testing completed!"