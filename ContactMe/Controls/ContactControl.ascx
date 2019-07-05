<%@ Control Language="C#" AutoEventWireup="True" Inherits="Controls_ContactControl" CodeFile="ContactControl.ascx.cs" %>
<asp:Panel ID="Panel1" runat="server" DefaultButton="btnSubmit">
    <h3 class="main-heading"><span>Send me a message</span></h3>
    <div id="contact-status">
        <asp:Label ID="lblMsgSend" runat="server" Visible="false" />
    </div>
    <p>
        <label runat="server">
            Your Name
            <asp:RequiredFieldValidator ID="RequiredFieldValidator11" runat="server" ErrorMessage="(Required)" ForeColor="Red" ControlToValidate="YourName" ValidationGroup="save" Display="Dynamic" />
        </label>
        <asp:TextBox runat="server" CssClass="input" ID="YourName" ClientIDMode="Static" Text="Please type your name" MaxLength="40" TextMode="SingleLine" onClick="this.select()" required="required" />
    </p>
    <p>
        <label runat="server">
            Your Email Address
            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="(Required)" ForeColor="Red" ControlToValidate="YourEmail" ValidationGroup="save" Display="Dynamic" />
            <asp:RegularExpressionValidator runat="server" ID="RegularExpressionValidator23" SetFocusOnError="true" ControlToValidate="YourEmail" ErrorMessage="(Wrong E-mail Format)" ForeColor="Red" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" Display="Dynamic" ValidationGroup="save" />
        </label>
        <asp:TextBox runat="server" CssClass="input" ID="YourEmail" ClientIDMode="Static" Text="Please type your email address" MaxLength="50" onClick="this.select()" required="required" />
    </p>
    <p>
        <label for="message">
            Your Message
        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="(Required)" ForeColor="Red" ControlToValidate="Comments" ValidationGroup="save" Display="Dynamic" />
        </label>
        <asp:TextBox runat="server" CssClass="textarea" ID="Comments" Text="Please type your message" TextMode="MultiLine" MaxLength="10000" Columns="88" Rows="12" onClick="this.select()" required="required"></asp:TextBox>
    </p>
	<div class="g-recaptcha" data-sitekey="6LfI5M8SAAAAAApisUwwNQqkr1h97WW8Cu4-MpT0"></div>
	
    <asp:Button runat="server" ID="btnSubmit" ClientIDMode="Static" CssClass="submit" Text="Send your message" OnClick="Button1_Click" ValidationGroup="save" />

    <script type="text/javascript">
		$('#contactform').bind('submit', function(){
			if ($('#YourEmail').val() !== "Please type your email address" && $('#YourName').val() !== "Please type your name"){
				parent.ga('send','event','Send New Message','Clicked',$('#YourEmail').val());
			}
		});
	</script>
</asp:Panel>

