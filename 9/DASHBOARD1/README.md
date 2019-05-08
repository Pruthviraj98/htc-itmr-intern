The dataset is given in the .sql format as a dump Import it into Mysql 
(The port num for mysql is 3306)

Apache server can be used by setting the ProxyPass module in the cofig file in the http config file in the xampp

The Node can be piped by using this proxy network of the Apache which runs at the port number of 80

To run this module, 
Download this module and run the apache server after setting the ProxyPass module in port 80 to pipe it to port 3000 of node
Now, run the node over apache using http://localhost/node
...
