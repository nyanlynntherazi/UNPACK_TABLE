# UNPACK_TABLE
Google Sheet Custom Function to Unpack Comma Separated Values in one column to multiple lines

## Demo
![](https://github.com/nyanlynntherazi/UNPACK_TABLE/blob/main/demo.gif)

# How to install the script

1. Create or open an existing spreadsheet in Google Sheets.
2. Select the menu item Tools > Script editor. If you are presented with a welcome screen, click Blank Project on the left to start a new project.
3. Delete any code in the script editor. Copy and paste the code from zlookup.gs into the script editor.
4. Select the menu item File > Save. Give the script project a name and click OK.
5. All done! Now you can use the custom function.

# How to use
=UNPACK_TABLE(Table Range Without Header, Column Index with Comma Separated Values, Column Index with Values to Average)

For instance,
If data range is A2:E10
Column with comma separated value is column C
Column with values to average is column E

The formula should be like this
=UNPACK_TABLE(A2:E10,3,5)

### To update later

- [x] Write Read Me 
- [ ] Table Header True/False Option
- [ ] To work on option to use function without averaging column
- [ ] To work on Multiple Comma separated columns
