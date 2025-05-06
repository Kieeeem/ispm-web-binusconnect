<!-- resources/views/binus_connect.blade.php -->
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binus Connect</title>
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #333333;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px 40px;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px solid #e0e0e0;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #004a99;
        }
        .hero-section {
            text-align: center;
            padding: 60px 20px;
            margin: 30px 0;
        }
        .hero-title {
            font-size: 32px;
            font-weight: 700;
            color: #004a99;
            margin-bottom: 20px;
        }
        .hero-description {
            font-size: 18px;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto 30px;
            color: #555555;
        }
        .cta-button {
            background-color: #004a99;
            color: white;
            border: none;
            padding: 12px 35px;
            font-size: 16px;
            border-radius: 30px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s;
        }
        .cta-button:hover {
            background-color: #003366;
            transform: translateY(-2px);
        }
        .features-section {
            margin: 60px 0;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
        }
        .feature-card {
            background-color: #f9f9f9;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            transition: transform 0.3s;
        }
        .feature-card:hover {
            transform: translateY(-5px);
        }
        .feature-title {
            color: #004a99;
            font-size: 20px;
            font-weight: 600;
            margin-top: 0;
            margin-bottom: 15px;
        }
        .feature-description {
            color: #666666;
            line-height: 1.5;
            margin: 0;
        }
    </style>
</head>
<body>
    <div id="root">

    </div>
</body>
</html>