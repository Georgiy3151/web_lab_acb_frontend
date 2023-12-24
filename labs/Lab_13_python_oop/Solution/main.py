from datetime import datetime
import json
import os
from writer import XlsAnalyticPaymentWriter


def load_data(file_path):
    base_path = "C:\Users\takco\OneDrive\Рабочий стол\web_lab_aib_frontend\labs\Lab_13_python_oop"
    full_path = os.path.join(base_path, file_path)
    with open(full_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data
def generate_report_filename():
    timestamp = datetime.now().strftime('%Y_%m_%d_%H_%M_%S')
    return f'my_payments_analytics_{timestamp}.xlsx'
def main():
    clients_data = load_data('clients.json')
    payments_data = load_data('payments.json')
    data = {'clients': clients_data.get('clients', []), 'payments': payments_data.get('payments', [])}
    output_file = generate_report_filename()
    xls_writer = XlsAnalyticPaymentWriter(data)
    xls_writer.write_excel_report(output_file)
    print(f"Report generated successfully. Output file: {output_file}")
if __name__ == '__main__':
    main()
