import {
  Injectable
} from "@angular/core";
import {
  StudentModel
} from "../models/Student.model"
import {
  Observable,
  of
} from "rxjs";
@Injectable()



export class StudentsService {
  getStudents(): Observable < StudentModel[] > {
    return of([{
      ID: 1,
      dob: '1995-06-10',
      gender: 'Male',
      fname: 'Ravi',
      email: 'rvi@gore.com',
      Class: '1',
      address: { road: '21', city: 'NY' },
      grade: { id: 78, name: 'First' },
      contact: 9875451,
      isactive: true,
      PhotoPath: 'assets/images/Students/4e6c9641435441.57a5ca57a08fa.gif',
      PhotoPreview:true
    }, {
      ID: 2,
      dob: '1995-06-10',
      gender: 'Male',
      fname: 'Ravi',
      email: 'rvi@gore.com',
      Class: '1',
      address: { road: '21', city: 'NY' },
        grade: { id: 78, name: 'First' },
      contact: 9875451,
      isactive: true,
      PhotoPath: 'assets/images/Students/_free-icons_png_512_2612547.png',
        PhotoPreview: true
    }, {
      ID: 3,
      dob: '1995-06-10',
      gender: 'Male',
      fname: 'Ravi',
      email: 'rvi@gore.com',
      Class: '1',
      address: { road: '21', city: 'NY' },
      grade: {id:78,name:'First'},
      contact: 9875451,
      isactive: true,
      PhotoPath: 'assets/images/Students/Human_icon-icons.com_71855.png',
        PhotoPreview: true
    }]);
  }
}
