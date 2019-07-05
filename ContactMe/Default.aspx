<%@ Page Language="C#" AutoEventWireup="True" Inherits="Contact" CodeFile="Default.aspx.cs" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ Register Src="Controls/ContactControl.ascx" TagName="SendMail" TagPrefix="sm1" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Send me an e-mail</title>
    <script type="text/javascript" src="../js/jquery.min.js"></script>
	<script type="text/javascript" src='https://www.google.com/recaptcha/api.js'></script>
    <link rel="stylesheet" type="text/css" href="../css/style.css"/>
    <style type="text/css">
        body
        {
            margin: 0px !important;
            padding: 0px !important;
            background-color:white;
            font-family: Arial;
        }
    </style>
</head>
<body>
    <form id="contactform" ClientIDMode="Static" runat="server">
    <div>
		<sm1:SendMail ID="SendMail1" runat="server" />
    </div>
    </form>
</body>
</html>
