from base import BaseXlsBlock
from datetime import datetime
from collections import defaultdict

class TopPayersBlock(BaseXlsBlock):
    NAME = "Отчёт по активным клиентам"
    def write_header(self):
        self._write_header(self.NAME)
    def write_data(self):
        self.row += 1
        clients, payments = self.data['clients'], self.data['payments']
        quarterly_payments = self._calculate_quarterly_payments(payments)
        top_payers = self._get_top_payers(quarterly_payments, clients)
        self._write_top_payers(top_payers)
    def _write_top_payers(self, top_payers):
        for i, payer in enumerate(top_payers, start=1):
            client_info = self._get_client_info(payer['client_id'])
            fio, total_amount = client_info['fio'], payer['total_amount']
            self.worksheet.write(self.row + i, self.col, f"{i}. **{fio}**: {total_amount}")
    def _get_top_payers(self, quarterly_payments, clients):
        top_payers = sorted(
            [{'client_id': client_id, 'total_amount': sum(data.values())} for client_id, data in quarterly_payments.items()],
            key=lambda x: x['total_amount'],
            reverse=True
        )[:10]
        return top_payers
    def _calculate_quarterly_payments(self, payments):
        quarterly_payments = defaultdict(lambda: defaultdict(float))
        for payment in payments:
            client_id, amount, created_at = payment['client_id'], payment['amount'], datetime.strptime(
                payment['created_at'], "%Y-%m-%dT%H:%M:%S.%fZ")
            quarter = (created_at.month - 1) // 3 + 1
            quarterly_payments[client_id][quarter] += amount
        return quarterly_payments
    def _get_client_info(self, client_id):
        return next(client for client in self.data['clients'] if client['id'] == client_id)
class TopCitiesBlock(BaseXlsBlock):
    NAME = "География клиентов"
    def write_header(self):
        self._write_header(self.NAME)
    def write_data(self):
        self.row += 1
        clients = self.data['clients']
        city_counts = self._calculate_city_counts(clients)
        top_cities = sorted(city_counts.items(), key=lambda x: x[1], reverse=True)[:10]
        self._write_top_cities(top_cities)
    def _write_top_cities(self, top_cities):
        for i, (city, count) in enumerate(top_cities, start=1):
            self.worksheet.write(self.row + i, self.col, f"{i}. **{city}**: {count} клиентов")
    def _calculate_city_counts(self, clients):
        city_counts = defaultdict(int)
        for client in clients:
            city_counts[client['city']] += 1
        return city_counts
class AccountStatusBlock(BaseXlsBlock):
    NAME = "Анализ состояния счёта"
    def write_header(self):
        self._write_header(self.NAME)
    def write_data(self):
        self.row += 1
        clients, payments = self.data['clients'], self.data['payments']
        account_balances = self._calculate_account_balances(payments)
        top_balances = sorted(account_balances.items(), key=lambda x: x[1], reverse=True)[:10]
        self._write_top_balances(top_balances)
    def _write_top_balances(self, top_balances):
        for i, (client_id, balance) in enumerate(top_balances, start=1):
            client_info = self._get_client_info(client_id)
            fio = client_info['fio']
            self.worksheet.write(self.row + i, self.col, f"{i}. **{fio}**: Баланс - {balance}")
    def _calculate_account_balances(self, payments):
        account_balances = defaultdict(float)
        for payment in payments:
            client_id, amount = payment['client_id'], payment['amount']
            account_balances[client_id] += amount
        return account_balances
    def _get_client_info(self, client_id):
        return next(client for client in self.data['clients'] if client['id'] == client_id)
    def _write_header(self, header):
        self.worksheet.write(self.row, self.col, f"**{header}**")
