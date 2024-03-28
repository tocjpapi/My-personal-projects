from flask import Flask, request, render_template
import smtplib

app = Flask(__name__)

@app.route('send_email.py', methods=['POST'])
def send_email():
    if request.method == 'POST':
        name = request.form['name']
        service = request.form['service']
        email = request.form['email']
        company = request.form['company']
        message = request.form['message']

        send_email_function(name, service, email, company, message)
        return "Email sent successfully!"

    return render_template('home.html')

def send_email_function(name, service, email, company, message):
    # Email settings
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    smtp_username = "treasure32109@gmail.com"
    smtp_password = ""
    recipient = "cjwebdesigned@gmail.com"

    # Construct email message
    email_message = f"Name: {name}\nService: {service}\nEmail: {email}\nCompany: {company}\n\nMessage:\n{message}"

    # Send email
    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.sendmail(smtp_username, recipient, email_message)
        server.quit()
        print("Email sent successfully!")
    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == '__main__':
    app.run(debug=True)