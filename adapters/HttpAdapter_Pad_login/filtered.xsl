<!--

    IBM Confidential OCO Source Materials

    5725-I43 Copyright IBM Corp. 2006, 2013

    The source code for this program is not published or otherwise
    divested of its trade secrets, irrespective of what has
    been deposited with the U.S. Copyright Office.

-->
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:h="http://www.w3.org/1999/xhtml">
    <xsl:output method="text"/>
    
    <xsl:template match="/">
        {
	        'Items': [
		        <xsl:for-each select="result">
	                {
		                
		                'guid': '<xsl:value-of select="Msg"/>',
		                'link': '<xsl:value-of select="Account"/>',
		                'description': '<xsl:value-of select="id"/>',
		                'pubDate': '<xsl:value-of select="IsSuccess"/>'
	                },
		        </xsl:for-each>
	        ]
        }
    </xsl:template>

</xsl:stylesheet>
