## Inspiration
Problems arise for credit cardholders when they fail to pay their bills on time, and accrue interest on money owed. This is a risk many take to enjoy to benefits such as cash back rewards and frequent flyer miles, at the risk of damaging their credit score.  Debit cardholders are at risk if their card is compromised and may stand to have their checking accounts emptied, with no protection or insurance to cover the loss.

SmartCard MiddleWare (SCMW) takes the benefits from credit and debit cards and combines them with a simple service. No longer will a credit card holder accidentally spend more then they have or fail to pay their bill at the end of the month. 

## What it does
Users of SCMW will have their checking account balances checked before a credit card purchase is authorized. If the cost of the current charge is less than one's checking account balance the card will be authorized, the transaction completed, and the total cost of the purchase will be transferred out of one's checking to pay off the expense. Once this process is complete, the user will receive a text message with their updated balance.  If one does not have enough funds to cover the purchase, the card will be declined. The user will receive a text message letting them know the cost of the charge they attempted to complete and remind them of their current balance.  

As a result of SCMW, users can reap the benefits of credit card rewards and build their credit score with no risk that is normally associated with having a credit card. 

## How we built it
We leveraged Capital One's Nessie API to handle users, accounts, charges and more. Furthermore, we used Twillio's service to send the user informative text messages when they use their credit card. The logic behind determining pass/fail transactions were created using Javascript, and the site is built with a beautiful HTML5 and CSS3 template. 

## Challenges we ran into
We found that Nessie has a few issues of its own that we made aware to the dev team. Credit card transactions do not increment the balance of the card positively as making charges in the real world would, it only decrements balances. As a result, one must add a positive balance to the card when assigning it to a customer to make purchases. This is limiting, as credit card balances can't be added to manually once generated. To properly implement the logic behind SCMW we had to use a second checking account to act as a credit card until these issues are resolved.

## Accomplishments that we're proud of
We were proud to get Twilio integration working along with Nessie as it brings informative updates to the customer as they're using their credit card. 
 
## What we learned
We learned how easy it is to use a handful of the GET/POST/PULL/PUT API calls within Nessie for Accounts, Customers, Merchants, and Purchases. 

## What's next for SmartCard MiddleWare
We're hoping that a credit card company may release an API that gives a user more control over handling credit cards so SCMW could be implemented outside of a sandbox environment. 