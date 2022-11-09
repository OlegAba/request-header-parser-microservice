import { Request, Response} from 'express';
import * as ServerResponse from './ServerResponse'

export default class Controller {

  public getRequestInfo(req: Request, res: Response): void {

    console.log(req.headers);

    const data = { 
      ipaddress: req.ip,
      language: req.headers['accept-language'],
      software: req.headers['user-agent']
    }

    return ServerResponse.ok(res, data);
  }
}