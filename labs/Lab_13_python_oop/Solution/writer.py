import xlsxwriter
from datetime import datetime
from base import BaseXlsBlock
from blocks import TopPayersBlock, TopCitiesBlock, AccountStatusBlock
from main import generate_report_filename


class XlsAnalyticPaymentWriter:
    ANALYTICS_BLOCKS_CLASSES = [
        TopPayersBlock,
        TopCitiesBlock,
        AccountStatusBlock
    ]
    def __init__(self, data):
        self.data = data
    def write_excel_report(self, output_file):
        workbook = xlsxwriter.Workbook(output_file)
        worksheet = workbook.add_worksheet()
        row, col = 0, 0  
        for block_class in self.ANALYTICS_BLOCKS_CLASSES:
            block_instance = block_class(worksheet, row, col, self.data)
            block_instance.write_header()
            block_instance.write_data()
            row += block_instance.get_row_increment() 
        workbook.close()
if __name__ == '__main__':
    clients_data = {} 
    payments_data = {} 
    data = {'clients': clients_data.get('clients', []), 'payments': payments_data.get('payments', [])}
    output_file = generate_report_filename()
    xls_writer = XlsAnalyticPaymentWriter(data)
    xls_writer.write_excel_report(output_file)
    print(f"Report generated successfully. Output file: {output_file}")