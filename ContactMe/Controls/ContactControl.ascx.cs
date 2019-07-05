using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Mail;
using System.Net;
using System.Net.Mail;
using Newtonsoft.Json;

public partial class Controls_ContactControl : System.Web.UI.UserControl
{
    #region properties
    private string loginEmail = "contact@ionutdanila.com";
    private string password = "UAIC20Mai1990";
    private string toEmail = "hello@ionutdanila.com";
    #endregion

    protected void SendMail()
    {
        var mailMessage = new System.Net.Mail.MailMessage();
        mailMessage.Sender = new MailAddress(YourEmail.Text);
        mailMessage.From = new MailAddress(YourEmail.Text);
        mailMessage.To.Add(new MailAddress(toEmail));
        mailMessage.Subject = String.Format("Message from {0}", YourName.Text);
        mailMessage.Body = String.Format("Username: {0} \n\rE-mail: {1}\n\r Message: {2}", YourName.Text, YourEmail.Text, Comments.Text);

        var smtp = new System.Net.Mail.SmtpClient();
        {
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.EnableSsl = true;
            smtp.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
            smtp.Credentials = new NetworkCredential(loginEmail, password);
            smtp.Timeout = 20000;
        }
        smtp.Send(mailMessage);
    }

    public static string Validate(string EncodedResponse)
    {
        var client = new System.Net.WebClient();

        string PrivateKey = "6LfI5M8SAAAAALThboicoEE11SIKZ_EObBJVT_g3";

        var GoogleReply = client.DownloadString(string.Format("https://www.google.com/recaptcha/api/siteverify?secret={0}&response={1}", PrivateKey, EncodedResponse));

        var captchaResponse = JsonConvert.DeserializeObject<ReCaptchaEntity>(GoogleReply);

        return captchaResponse.Success;
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        try
        {
            string EncodedResponse = Request.Form["g-Recaptcha-Response"];
            bool IsCaptchaValid = (Validate(EncodedResponse) == "True" ? true : false);

            if (!IsCaptchaValid)
            {
                lblMsgSend.Text = "<div class=\"error\">Error! Are you a robot?</div>";
                lblMsgSend.Visible = true;
                return;
            }

            SendMail();
            lblMsgSend.Text = "<div class=\"success\">Thanks for sending your message! I'll get back to you shortly!</div>";
            lblMsgSend.Visible = true;
            YourEmail.Text = "";
            YourName.Text = "";
            Comments.Text = "";
        }
        catch (Exception)
        {
            lblMsgSend.Text = "<div class=\"error\">There was a problem sending your message. Please try again!</div>";
            lblMsgSend.Visible = true;
        }
    }
}