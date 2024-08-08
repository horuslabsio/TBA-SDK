export class ConnectorNotConnectedError extends Error {
  name = 'ConnectorNotConnectedError';
  message = 'Connector not connected';
}

export class ConnectorNotFoundError extends Error {
  name = 'ConnectorNotFoundError';
  message = 'Connector not found';
}

export class UserRejectedRequestError extends Error {
  name = 'UserRejectedRequestError';
  message = 'User rejected request';
}

export class UserNotConnectedError extends Error {
  name = 'UserNotConnectedError';
  message = 'User not connected';
}

export const tokenbound_icon = `data:image/png;base64,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`;
