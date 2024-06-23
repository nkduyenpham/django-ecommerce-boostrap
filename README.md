# E-commerce Website

## Overview

This project is a full-stack e-commerce website built with Django for the backend and Bootstrap. The platform allows users to view product details, add them to their cart, and make purchases. It also includes admin functionalities to manage products, orders, and users.

## Features

- User authentication (registration, login, logout)
- Product listing and detailed views
- Shopping cart functionality
- Order management
- Admin panel for managing products, orders, and users
- Responsive design with Bootstrap

## Tech Stack

- **Backend:** Django
- **Frontend:** Bootstrap
- **Database:** SQLite

## Getting Started

### Prerequisites

- Python 3.x
- pip (Python package installer)

  ### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/nkduyenpham/django-ecommerce-boostrap.git
)

2. **Create a virtual environment and activate it:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. **Install backend dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4. **Install frontend dependencies:**
    ```bash
    npm install
    ```

5. **Apply database migrations:**
    ```bash
    python manage.py migrate
    ```

6. **Create a superuser for the admin panel:**
    ```bash
    python manage.py createsuperuser
    ```

7. **Collect static files:**
    ```bash
    python manage.py collectstatic
    ```

8. **Run the development server:**
    ```bash
    python manage.py runserver
    ```

Visit `http://127.0.0.1:8000` in your browser to see the website in action. The admin panel is available at `http://127.0.0.1:8000/admin`.

  
### Common Commands

- **Start the development server:**
    ```bash
    python manage.py runserver
    ```

- **Apply database migrations:**
    ```bash
    python manage.py migrate
    ```

- **Create a new app:**
    ```bash
    python manage.py startapp app_name
    ```

- **Create a superuser:**
    ```bash
    python manage.py createsuperuser
    ```

- **Collect static files:**
    ```bash
    python manage.py collectstatic
    ```


